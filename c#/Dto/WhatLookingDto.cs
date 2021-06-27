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
      //  public List<candidateStatusWDto> status1 { get; set; }

        public WhatLookingDto(WhatImLookingFor w)
        {
            MaxAge = w.MaxAge;
            MinAge = w.MinAge;
            MaxHeight = w.MaxHeight;
            MinHeight = w.MinHeight;
            CodeCW = w.CodeCW;
            description = w.description;
            Comunities = w.Candidates.CandidateWantedComunities.Select(c => new ComunityWantedDto(c)).ToList();
           // status1 = w.status1.CandidateStatuses.Select(c => new candidateStatusWDto(c)).ToList();

        }

        public static WhatImLookingFor Todal(WhatLookingDto w)
        {
            WhatImLookingFor wDal = new WhatImLookingFor();
            wDal.MaxAge = w.MaxAge;
            wDal.MinAge = w.MinAge;
            wDal.MaxHeight = w.MaxHeight;
            wDal.MinHeight = w.MinHeight;
            wDal.CodeCW = w.CodeCW;
            wDal.description = w.description;
            wDal.Candidates.CandidateWantedComunities = w.Comunities.Select(c => ComunityWantedDto.Todal(c)).ToList();
          //  wDal.status1.CandidateStatuses=status1.Select(c => new candidateStatusWDto.Todal(c)).ToList();
            return wDal;    
            
        }
    }
}
