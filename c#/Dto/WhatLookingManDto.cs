using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
   public class WhatLookingManDto
    {
        public Nullable<bool> wigORhandkerchief { get; set; }
        public WhatLookingDto WhatLooking { get; set; }
        public WhatLookingManDto()
        {

        }

        public WhatLookingManDto(WhatImLookingFor w)
        {
            WhatLooking = new WhatLookingDto(w);
            wigORhandkerchief = w.Candidates.wigORhandkerchief;
            

        }
        public static WhatImLookingFor Todal(WhatLookingManDto w)
        {
            WhatImLookingFor wDal = WhatLookingDto.Todal(w.WhatLooking);
            wDal.Candidates.wigORhandkerchief = w.wigORhandkerchief;

            wDal = WhatLookingDal.AddWhatLooking(wDal);
            return wDal;

        }
    }
}
