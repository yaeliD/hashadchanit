using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace Dto
{
    public class communityDto
    {
        public int codeC { get; set; }
        public string nameC { get; set; }

        public communityDto()
        {

        }

        public communityDto(community c)
        {
            codeC = c.codeC;
            nameC = c.nameC;
        }

        public static community Todal(communityDto c)
        {
            return new community()
            {

                codeC = c.codeC,
                nameC = c.nameC,

            }; }
        public static communityDto Todto(community cdto)
        {
            return new communityDto()
            {

                codeC = cdto.codeC,
                nameC = cdto.nameC,

            };
        }
            public static List<communityDto> Todto1(List<community> cc)
            { 
                List<communityDto> dto = new List<communityDto>();
                foreach (var item in cc)
                {
                    dto.Add(Todto(item));
                }
                return dto;
               

            }
    }
}
