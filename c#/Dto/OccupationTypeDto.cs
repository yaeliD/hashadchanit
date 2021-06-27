using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
  public  class OccupationTypeDto
    {
        public int OccupationTypeId { get; set; }
        public string OccupationTypeName { get; set; }

        public OccupationTypeDto(OccupationTypes o)
        {
            OccupationTypeId = o.OccupationTypeId;
            OccupationTypeName = o.OccupationTypeName;

        }

        public OccupationTypeDto()
        {
        }

        public static OccupationTypes Todal(OccupationTypeDto o)
        {
            return new OccupationTypes()
            {

                OccupationTypeId = o.OccupationTypeId,
                OccupationTypeName = o.OccupationTypeName,
            };
        }
        public static OccupationTypeDto Todto(OccupationTypes odto)
        {
            return new OccupationTypeDto()
            {

                OccupationTypeId = odto.OccupationTypeId,
                OccupationTypeName = odto.OccupationTypeName,

            };
        }
        public static List<OccupationTypeDto> Todto1(List<OccupationTypes> cc)
        {
            List<OccupationTypeDto> dto = new List<OccupationTypeDto>();
            foreach (var item in cc)
            {
                dto.Add(Todto(item));
            }
            return dto;


        }
    }

}
