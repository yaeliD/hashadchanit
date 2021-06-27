using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
   public class StatusDto
    {
        public int statusCode { get; set; }
        public string statusName { get; set; }


        public StatusDto(Status s)
        {
            statusCode = s.statusCode;
            statusName = s.statusName;
        }

        public StatusDto()
        {
        }

        public static Status ToDal(StatusDto s)
        {
            return new Status
            {
                statusCode = s.statusCode,
                statusName = s.statusName
            };

        }
        public static StatusDto Todto(Status sdto)
        {
            return new StatusDto()
            {

                statusCode = sdto.statusCode,
                statusName = sdto.statusName

            };
        }
        public static List<StatusDto> Todto1(List<Status> cc)
        {
            List<StatusDto> dto = new List<StatusDto>();
            foreach (var item in cc)
            {
                dto.Add(Todto(item));
            }
            return dto;


        }
    }
}
