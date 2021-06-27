using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class WhatLookingBL
    {
        public static bool AddManWhatLooking(WhatLookingManDto w)
        {
            try
            {
                Dal.WhatImLookingFor wDal = Dto.WhatLookingManDto.Todal(w);
                Dal.WhatLookingDal.AddWhatLooking(wDal);
                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }
        }

        public static bool AddWomanWhatLooking(WhatLookingWomanDto w)
        {
            try
            {
                Dal.WhatImLookingFor wDal = Dto.WhatLookingWomanDto.Todal(w);
                Dal.WhatLookingDal.AddWhatLooking(wDal);
                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }
        }
    }
}
