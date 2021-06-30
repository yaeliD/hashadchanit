using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
  public  class FullCandidateDto
    {
        public candidatesDto Candidate { get; set; }
        public WhatLookingDto WhatLooking { get; set; }
        public Nullable<int> occupationAfter { get; set; }
        public string OccupationAfterName { get; set; }
        public int? currentOccupation { get; set; }
        public string currentOccupationName { get; set; }
        public Nullable<bool> wigORhandkerchief { get; set; }
        public bool IsMan { get; set; }


        public FullCandidateDto()
        {

        }

        public FullCandidateDto(Candidates c)
        {
            this.Candidate = new candidatesDto(c);
            WhatLooking = new WhatLookingDto(c.WhatImLookingFor);
            occupationAfter = c.occupationAfter;
            OccupationAfterName = c.OccupationTypes.OccupationTypeName;
            currentOccupation = c.currentOccupation;
            currentOccupationName = c.OccupationTypes1.OccupationTypeName;
            wigORhandkerchief = c.wigORhandkerchief;
            IsMan = c.ManCandidate != null;
           

        }
    }
}
