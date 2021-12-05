using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using UseAuthenticationWithJWT.Contracts;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using Microsoft.IdentityModel.Tokens;
using UseAuthenticationWithJWT.Models;
using Microsoft.Extensions.Options;

namespace UseAuthenticationWithJWT.Services
{
    public class AuthService : IAuthService
    {
        private readonly JwtConfiguration _jwtConfig;

        public AuthService(IOptions<JwtConfiguration> jwtConfig)
        {
            _jwtConfig = jwtConfig.Value;
        }
        public async Task<string> Authenticate(string userName, string password)
        {
            await Task.Delay(200);
            var result = IsUser(userName, password);
            if (!result.isValid)
            {
                return null;
            }

            var tokenHandler = new JwtSecurityTokenHandler();
            var key = System.Text.Encoding.ASCII.GetBytes(_jwtConfig.Key);
            var tokenDescriptor = new SecurityTokenDescriptor
            {
                Issuer = _jwtConfig.Issuer,
                Audience = _jwtConfig.Audience,
                Subject = new ClaimsIdentity(new Claim[] {

                    new Claim(ClaimTypes.Name, userName),
                    new Claim(ClaimTypes.Role, result.role)
                }),
                Expires = DateTime.UtcNow.AddDays(_jwtConfig.Days),
                SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(key),
                                                            SecurityAlgorithms.HmacSha256Signature)
            };
            
            var token = tokenHandler.CreateToken(tokenDescriptor);
            return tokenHandler.WriteToken(token);
        }


        private (string role, bool isValid) IsUser(string username, string password)
        {
            if(username == "Moshe" && password == "1234567")
            {
                return ("Admin", true);
            }

            if (username == "Kobi" && password == "1234567")
            {
                return ("SalesMan", true);
            }

            return ("", false);
        }



    }
}
