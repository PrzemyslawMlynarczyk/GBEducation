﻿using Aurora.Server.Models.Student;
using AuroraServer;

namespace Aurora.Server.Controllers.Student;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Aurora.Server.Models.AspNetUsers;
using NHibernate.Linq;

[EnableCors("AllowAllOrigins")]
[Route("api/[controller]")]
[ApiController]

public class AspNetUsersController : ControllerBase
{
    private Persistence.AspNetUsers.AspNetUsersRepository _AspNetUsersRepository = new Persistence.AspNetUsers.AspNetUsersRepository();

    [HttpGet]
    public ActionResult<IEnumerable<Models.AspNetUsers.AspNetUsersDTO>> GetAll()
    {
        using (var session = NHibernateHelper.OpenSession())
        {
            //połączenie dwóch tabel z bazy, następnie wyłuskanie konkretnego rekordu (w tym przypadku Name_class)
            var usersDTO = session.Query<Models.AspNetUsers.AspNetUsers>()
                .Join(session.Query<Models.Class.Class>(),
                    user => user.FK_idclass,
                    classObj => classObj.Id,
                    (user, classObj) => new Models.AspNetUsers.AspNetUsersDTO
                    {
                        Name = user.name,
                        Surname = user.surname,
                        EmailConfirmed = user.EmailConfirmed,
                        Email = user.Email,
                        FK_Idclass = user.FK_idclass,
                        ClassName = classObj.Name_class
                    })
                .ToList();

            return Ok(usersDTO);
        }
    }


    [HttpGet("{classId}")]
    public ActionResult<int> GetClassStudentsCount(Guid classId)
    {
        using (var session = NHibernateHelper.OpenSession())
        {
            var usersCount = session.Query<Models.AspNetUsers.AspNetUsers>()
                                    .Count(user => user.FK_idclass == classId);
            return Ok(usersCount);
        }
    }




    [HttpPost]
    public ActionResult<Models.AspNetUsers.AspNetUsersDTO> Register([FromBody] AspNetUsers testEntity)
    {

        using (var session = NHibernateHelper.OpenSession())
        {
            using (var transaction = session.BeginTransaction())
            {
                var checkEmail = session.Query<AspNetUsers>().Where(x => x.Email == testEntity.Email).ToList();
                if(checkEmail.Count > 0)
                {
                    return StatusCode(404);
                }
                var passwordHasher = new PasswordHasher<Models.AspNetUsers.AspNetUsers>();
                string hashedPassword = passwordHasher.HashPassword(null, testEntity.PasswordHash);
                testEntity.PasswordHash = hashedPassword;

                testEntity.NormalizedEmail = testEntity.Email.ToUpper();
                testEntity.UserName = testEntity.Email;
                testEntity.NormalizedUserName = testEntity.UserName.ToUpper();


                testEntity._AspNetUsersEnum = Models.AspNetUsers.AspNetUsersEnum.Student;
                
                try
                {
                    session.Save(testEntity);
                    transaction.Commit();
                    AspNetUsersDTO aspNetUsersDTO = new AspNetUsersDTO();
                    aspNetUsersDTO.Email = testEntity.Email;
                    aspNetUsersDTO.Surname = testEntity.surname;
                    aspNetUsersDTO.EmailConfirmed = testEntity.EmailConfirmed;
                    aspNetUsersDTO.Name = testEntity.name;
                    
                    return aspNetUsersDTO;
                }
                catch (Exception ex)
                {
                    transaction.Rollback();
                    return StatusCode(StatusCodes.Status500InternalServerError, $"Error: {ex.Message}");
                }

                
                


            }


        }
    }
    
    [HttpGet("info")]
    public async Task<IActionResult> GetUserInfo()
    {
        // Check if user is authenticated
        var user = HttpContext.User;
        if (user.Identity != null && user.Identity.IsAuthenticated)
        {
            // Retrieve user ID from claims
            var userIdClaim = user.FindFirst(ClaimTypes.NameIdentifier);
            if (userIdClaim == null)
            {
                return BadRequest("User ID claim not found.");
            }

            // Parse user ID
            if (!Guid.TryParse(userIdClaim.Value, out Guid userId))
            {
                return BadRequest("Invalid user ID format.");
            }

            // Retrieve user entity by ID
            using (var session = NHibernateHelper.OpenSession())
            {
                var userEntity = session.Get<Models.AspNetUsers.AspNetUsers>(userIdClaim.Value);

                AspNetUsersDTO aspNetUsersDTO = new AspNetUsersDTO();

                aspNetUsersDTO.Surname = userEntity.surname;
                aspNetUsersDTO.Name = userEntity.name;
                aspNetUsersDTO.Email = userEntity.Email;
                aspNetUsersDTO.EmailConfirmed = userEntity.EmailConfirmed;
                aspNetUsersDTO.FK_Idclass = userEntity.FK_idclass;

                if (userEntity == null)
                {
                    return NotFound("User not found.");
                }

                return Ok(aspNetUsersDTO);
            }
        }
        else
        {
            // User is not authenticated
            return Unauthorized();
        }
    }


}