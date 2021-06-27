using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using Dal;
using Dto;
namespace BL
{
   public  class communityBl
    {
        public static List<communityDto> GetAllEda()
        {
            List<community> communityListDal = Dal.CommunityDal.GetAllEda();
            List<communityDto> communityDTOs = communityDto.Todto1(communityListDal);
            return communityDTOs;
        }

      
    }
}

