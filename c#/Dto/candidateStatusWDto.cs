using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
     public class candidateStatusWDto
    {
  
            public int CandidateId { get; set; }
            public int StatusId { get; set; }
            public bool Wanted { get; set; }

      

        public candidateStatusWDto (CandidateStatuses c)
        {
            CandidateId = c.CandidateId;
            StatusId = c.StatusId;
            Wanted = c.Wanted;
        }

        public static CandidateStatuses Todal(candidateStatusWDto c)
        {
            return new CandidateStatuses()
            {
                CandidateId = c.CandidateId,
                StatusId = c.StatusId,
                Wanted = c.Wanted,
             };

        }




    }
}
