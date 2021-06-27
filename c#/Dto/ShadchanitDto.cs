using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace Dto
{
   public class ShadchanitDto
    {
        public int password_shadchanit { get; set; }
        public string username { get; set; }

        public ShadchanitDto()
        {

        }

        public ShadchanitDto(Shadchnit s)
        {
            password_shadchanit = s.password_shadchanit;
            username = s.username;
        }

        public static Shadchnit Todal(ShadchanitDto s)
        {
            return new Shadchnit() {
                password_shadchanit = s.password_shadchanit,
                username = s.username
            };
        }
    }
    
}
