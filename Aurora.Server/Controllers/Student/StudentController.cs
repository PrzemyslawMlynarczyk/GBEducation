using Aurora.Server.Models.Student;
using AuroraServer;

namespace Aurora.Server.Controllers.Student;
﻿using System.Security.Claims;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Cors;
using Microsoft.AspNetCore.Mvc;


[EnableCors("AllowAllOrigins")]
[Route("api/[controller]")]
[ApiController]

public class StudentController : ControllerBase
{
    private StudentRepository _studentRepository = new StudentRepository();
    [HttpGet]
    public ActionResult<IEnumerable<Models.Student.Student>> GetAll()
    {
      
        using (var session = NHibernateHelper.OpenSession())
        {
            var students = session.Query<Models.Student.Student>().ToList();
            return Ok(students);
        }
    }
}