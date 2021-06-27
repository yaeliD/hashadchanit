using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace Dto
{
    public class listOfMosdotDto
    {
        public int codeM { get; set; }
        public string nameM { get; set; }
        public Nullable<bool> sORy { get; set; }
        public listOfMosdotDto()
        {

        }

        public listOfMosdotDto(ListOfMosdot m)
        {
            codeM = m.codeM;
            nameM = m.nameM;
            sORy = m.sORy;
        }

        public static ListOfMosdot Todal(listOfMosdotDto m)
        {
            
            return new ListOfMosdot()
            {
                codeM = m.codeM,
                nameM = m.nameM,
                sORy = m.sORy,
            };
        }


        public static listOfMosdotDto Todto(ListOfMosdot m)
        {
            return new listOfMosdotDto()
            {
                codeM = m.codeM,
                nameM = m.nameM,
                sORy = m.sORy,

            };
        }
        public static List<listOfMosdotDto> Todto1(List<ListOfMosdot> cc)
        {
            List<listOfMosdotDto> dto = new List<listOfMosdotDto>();
            foreach (var item in cc)
            {
                dto.Add(Todto(item));
            }
            return dto;


        }
    }
}
