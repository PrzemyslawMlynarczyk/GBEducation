using Aurora.Server.Models.Student;
using AuroraServer;

namespace Aurora.Server.Controllers.Student;
using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;
using Aurora.Server.Models.AspNetUsers;

[EnableCors("AllowAllOrigins")]
[Route("api/[controller]")]
[ApiController]

public class AspNetUsersController : ControllerBase
{
    private Persistence.AspNetUsers.AspNetUsersRepository _AspNetUsersRepository = new Persistence.AspNetUsers.AspNetUsersRepository();
    [HttpGet]
    public ActionResult<IEnumerable<Models.AspNetUsers.AspNetUsers>> GetAll()
    {

        using (var session = NHibernateHelper.OpenSession())
        {
            var students = session.Query<Models.AspNetUsers.AspNetUsers>().ToList();
            return Ok(students);
        }
    }


    [HttpPost]
    public ActionResult<Models.AspNetUsers.AspNetUsersDTO> Register([FromBody] Models.AspNetUsers.AspNetUsers testEntity)
    {

        using (var session = NHibernateHelper.OpenSession())
        {
            using (var transaction = session.BeginTransaction())
            {
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
                    aspNetUsersDTO.Login = testEntity.login;
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
}