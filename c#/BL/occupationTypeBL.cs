using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using Dal;
using System.Threading.Tasks;

namespace BL
{
    public class occupationTypeBL
    {
        public static List<OccupationTypeDto> GetAoccuption()
        {
            List<OccupationTypes> occupationTypeListDal = Dal.occupationTypeDal.GetAoccuption();
            List<OccupationTypeDto> occupationTypeDTOs = OccupationTypeDto.Todto1(occupationTypeListDal);
            return occupationTypeDTOs;
        }
    }
}
