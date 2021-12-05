using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UseAuthenticationWithJWT.Contracts
{
    public interface IAuthService
    {
        Task<string> Authenticate(string userName, string password);

    }
}
