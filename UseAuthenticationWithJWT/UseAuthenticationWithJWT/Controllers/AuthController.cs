using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Claims;
using System.Threading.Tasks;
using UseAuthenticationWithJWT.Contracts;
using UseAuthenticationWithJWT.Models;

namespace UseAuthenticationWithJWT.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [Authorize]
    public class AuthController : ControllerBase
    {
        private readonly IAuthService _authService;

        public AuthController(IAuthService authService)
        {
            //User
            _authService = authService;
        }

        [HttpPost]
        [AllowAnonymous]
        public async Task<ActionResult<string>> Login(LoginRequest x)
        {
            var result = await _authService.Authenticate(x.UserName, x.Password);
            if(result != null)
            {
                return Ok(new LoginResponse(x.UserName, result));
            }
            return BadRequest();
        }

        [HttpGet]
        public IActionResult Get()
        {
            return Ok(User?.Identity?.Name);
        }

        [HttpGet("OnlyAdmin")]
        [Authorize(Roles = "Admin")]
        public IActionResult GetOnlyForAdmin()
        {
            return Ok(new { UseName = User?.Identity?.Name, Role = User.Claims.First(x=>x.Type == ClaimTypes.Role).Value });
        }

    }
}
