using Aurora.Server.Controllers.Student;
using Microsoft.AspNetCore.Mvc;
using Xunit;
using System.Collections.Generic;
using Aurora.Server.Models.AspNetUsers;

namespace Aurora.Server.Controllers.AspNetUsers
{
    public class AspNetUsersControllerTest
    {
        private readonly AspNetUsersController _controller;

        public AspNetUsersControllerTest()
        {
            _controller = new AspNetUsersController();
        }

        [Fact]
        public void GetAll_ReturnsOkResult()
        {
            var result = _controller.GetAll();

            var okResult = Xunit.Assert.IsType<OkObjectResult>(result.Result);
            var aspNetUsers = Xunit.Assert.IsAssignableFrom<IEnumerable<AspNetUsersDTO>>(okResult.Value);
            Xunit.Assert.NotEmpty(aspNetUsers);
        }
    }
}