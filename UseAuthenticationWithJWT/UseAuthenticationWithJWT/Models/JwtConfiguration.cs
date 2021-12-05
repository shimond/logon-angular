using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace UseAuthenticationWithJWT.Models
{
    public class JwtConfiguration
    {
        public string Key { get; set; }
        public string Audience { get; set; }
        public string Issuer { get; set; }
        public int Days { get; set; }
    }
}
