using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace Dal
{
    public class WhatLookingDal
    {
        public static WhatImLookingFor AddWhatLooking(WhatImLookingFor wDal)
        {
            using (The_MatchmakerEntities db = new The_MatchmakerEntities())
            {
               Candidates candidates= db.Candidates.Include(c=>c.ManCandidate).Include(c=>c.WomenCandidate).FirstOrDefault(c => c.codeCandidates == wDal.CodeCW);
                if (candidates.ManCandidate == null)
                {
                    candidates.occupationAfter = wDal.Candidates.occupationAfter;
                    candidates.currentOccupation = wDal.Candidates.currentOccupation;
                }
                else candidates.wigORhandkerchief = wDal.Candidates.wigORhandkerchief;

                candidates.CandidateWantedComunities = wDal.Candidates.CandidateWantedComunities;
                candidates.CandidateStatuses = wDal.Candidates.CandidateStatuses;
                wDal.Candidates = null;
                wDal.CodeCW = 0; 
                candidates.WhatImLookingFor = wDal;
                   
                db.SaveChanges();
                return wDal;
            }
        }

       
   
    //public static WhatImLookingFor AddManwil(WhatImLookingFor wDal)
    //{


    //        using (The_MatchmakerEntities db = new The_MatchmakerEntities())
    //        {
    //            ManCandidate candidates = db.ManCandidate.FirstOrDefault(c => c.codeCandidates == wDal.CodeCW);
    //            wDal.Candidates = null;
    //            wDal.CodeCW = 0;
    //           candidates.Candidates.WhatImLookingFor = wDal;

    //            db.SaveChanges();
    //            return wDal;
    //        }
    //}



    //    public static WhatImLookingFor AddWoManwil(WhatImLookingFor wDal)
    //    {


    //        using (The_MatchmakerEntities db = new The_MatchmakerEntities())
    //        {
    //            WomenCandidate candidates = db.WomenCandidate.FirstOrDefault(c => c.codeCandidates == wDal.CodeCW);
    //            wDal.Candidates = null;
    //            wDal.CodeCW = 0;
    //            candidates.Candidates.WhatImLookingFor = wDal;

    //            db.SaveChanges();
    //            return wDal;
    //        }
    //    }
    }
}