using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UseAuthenticationWithJWT.Models
{
    public record LoginRequest(string UserName, string Password);
    public record LoginResponse(string UserName, string Token);


}
