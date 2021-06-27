using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace BL
{
    public class statusBL
    {
        public static List<StatusDto> GetAllEda()
        {
            List<Status> statusListDal = Dal.statusDal.GetAllEda();
            List<StatusDto> statusDTOs = StatusDto.Todto1(statusListDal);
            return statusDTOs;
        }
    }
}
