using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
   public class ComunityWantedDto
    {
        public int CandidateId { get; set; }
        public int ComunityId { get; set; }
        public string ComunityName { get; set; }
        public bool Interested { get; set; }

        public ComunityWantedDto(CandidateWantedComunities cw )
        {
            CandidateId = cw.CandidateId;
            ComunityId = cw.ComunityId;
            ComunityName = cw.community.nameC;
            Interested = cw.Interested;

        }

        internal static CandidateWantedComunities Todal(ComunityWantedDto cw)
        {
            return new CandidateWantedComunities()
            {

                CandidateId = cw.CandidateId,
                ComunityId = cw.ComunityId,
                Interested = cw.Interested,


            };
        }


    }
}
