using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace Dal
{
    public class MatchingDal
    {
        public List<Candidates> GetAllWomanCandidates()
        {

            using (The_MatchmakerEntities db = new The_MatchmakerEntities())
            {

                return db.WomenCandidate.Include(c => c.Candidates)
                    .Include(c => c.Candidates.community)
                        .Include(c => c.Candidates.Contacts)
                        .Include("Candidates.community1")
                        .Include("Candidates.MosdotToCandidate")
                        .Include("Candidates.Siblings")
                        .Include("Candidates.MosdotToCandidate.ListOfMosdot")
                        .Include(c => c.Candidates.CandidateStatuses)
                        .Include(c => c.Candidates.Status1)
                        .Include(c => c.Candidates.OccupationTypes)
                        .Include(c => c.Candidates.OccupationTypes1)
                        .Include(c => c.Candidates.WhatImLookingFor)

                    .Select(c => c.Candidates).ToList();
            }

        }

        public List<Candidates> GetAllManCandidates()
        {
            using (The_MatchmakerEntities db = new The_MatchmakerEntities())
            {

                return db.ManCandidate.Include(c => c.Candidates)
                    .Include(c => c.Candidates.community)
                        .Include(c => c.Candidates.Contacts)
                        .Include("Candidates.community1")
                        .Include("Candidates.MosdotToCandidate")
                        .Include("Candidates.Siblings")
                        .Include("Candidates.MosdotToCandidate.ListOfMosdot")
                        .Include(c => c.Candidates.CandidateStatuses)
                        .Include(c => c.Candidates.Status1)
                        .Include(c => c.Candidates.OccupationTypes)
                        .Include(c => c.Candidates.OccupationTypes1)
                        .Include(c => c.Candidates.WhatImLookingFor)
.Select(c => c.Candidates).ToList();
            }

        }

        //public static List<Candidates> Mathescandidat()
        //{
        //    using (The_MatchmakerEntities db = new The_MatchmakerEntities())
        //    {

        //        return db.Candidates
        //            .Include(c => c.community)
        //                .Include(c => c.Contacts)
        //                .Include("community1")
        //                .Include("MosdotToCandidate")
        //                .Include("Siblings")
        //                .Include("MosdotToCandidate.ListOfMosdot")
        //                .Include(c => c.CandidateStatuses)
        //                .Include(c => c.Status1)
        //                .Include(c => c.OccupationTypes)
        //                .Include(c => c.OccupationTypes1)
        //                .Include(c => c.WhatImLookingFor)
        //            .Select(c => c).ToList();
        //    }
        //}
    }
}
