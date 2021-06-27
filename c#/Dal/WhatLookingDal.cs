using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class WhatLookingDal
    {
        public static WhatImLookingFor AddWhatLooking(WhatImLookingFor wDal)
        {
            using (The_MatchmakerEntities db = new The_MatchmakerEntities())
            {
                db.WhatImLookingFor.Add(wDal);
                db.SaveChanges();
                return wDal;
            }
        }

     
    }
}
