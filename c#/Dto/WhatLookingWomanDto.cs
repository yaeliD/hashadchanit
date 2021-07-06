using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
   public class WhatLookingWomanDto
    {
        public Nullable<int> occupationAfter { get; set; }
        public string OccupationAfterName { get; set; }
        public int? currentOccupation { get; set; }
        public string currentOccupationName { get; set; }
        public WhatLookingDto WhatLooking { get; set; }
        public WhatLookingWomanDto()
        {

        }
        public WhatLookingWomanDto(WhatImLookingFor w)
        {
            WhatLooking = new WhatLookingDto(w);
            occupationAfter = w.Candidates.occupationAfter;
            OccupationAfterName = w.Candidates.OccupationTypes.OccupationTypeName;
            currentOccupation =w.Candidates.currentOccupation;
            currentOccupationName = w.Candidates.OccupationTypes1.OccupationTypeName;
        }

        public static WhatImLookingFor Todal(WhatLookingWomanDto w)
        {
            WhatImLookingFor wDal = WhatLookingDto.Todal(w.WhatLooking);
            wDal.Candidates.occupationAfter = w.occupationAfter;
            wDal.Candidates.currentOccupation = w.currentOccupation;
            return wDal;

        }
    }
}
