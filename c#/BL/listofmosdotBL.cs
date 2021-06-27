using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Dal;
using System.Threading.Tasks;

namespace BL
{
    public class listofmosdotBL
    {
        public static List<listOfMosdotDto> GetAllmosdot()
        {
            List<ListOfMosdot> mosdotListDal = Dal.listofmosdotDal.GetAllmosdot();
            List<listOfMosdotDto> mosdotDTOs = listOfMosdotDto.Todto1(mosdotListDal);
            return mosdotDTOs;
        }
    }
}
