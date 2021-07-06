using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
   public class WhatLookingDto
    {
        public Nullable<System.DateTime> MaxAge { get; set; }
        public Nullable<System.DateTime> MinAge { get; set; }
        public Nullable<double> MaxHeight { get; set; }
        public Nullable<double> MinHeight { get; set; }
        public int CodeCW { get; set; }
        public string description { get; set; }
        public List<ComunityWantedDto> Comunities { get; set; }
       public List<candidateStatusWDto> status1 { get; set; }
        public WhatLookingDto()
        {
          

        }
        public WhatLookingDto(WhatImLookingFor w)
        {
            MaxAge = w.MaxAge;
            MinAge = w.MinAge;
            MaxHeight = w.MaxHeight;
            MinHeight = w.MinHeight;
            CodeCW = w.CodeCW;
            description = w.description;
            Comunities = w.Candidates.CandidateWantedComunities.Select(c => new ComunityWantedDto(c)).ToList();
            status1 = w.Candidates.CandidateStatuses.Select(c => new candidateStatusWDto(c)).ToList();

        }

        public static WhatImLookingFor Todal(WhatLookingDto w)
        {
             Candidates c=  Dal.CandidatesDal.GetCandidate(w.CodeCW);
             c.WhatImLookingFor = new WhatImLookingFor();
             c.WhatImLookingFor.MaxAge = w.MaxAge;
             c.WhatImLookingFor.MinAge = w.MinAge;
             c.WhatImLookingFor.MaxHeight = w.MaxHeight;
             c.WhatImLookingFor.MinHeight = w.MinHeight;
             c.WhatImLookingFor.CodeCW = w.CodeCW;
             c.WhatImLookingFor.description = w.description;
             c.CandidateWantedComunities = w.Comunities.Select(c1 => ComunityWantedDto.Todal(c1)).ToList();
             c.CandidateStatuses = w.status1.Select(c1 =>  candidateStatusWDto.Todal(c1)).ToList();
             c.WhatImLookingFor.Candidates = c;
             return  c.WhatImLookingFor;    
            
        }
    }
}
