using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.CompilerServices;
using System.Data.Entity;

namespace Dal
{
    public class CandidatesDal
    {
        public static int AddManCandidates(ManCandidate cdal)
        {
            try
            {

                using (The_MatchmakerEntities db = new The_MatchmakerEntities())
                {
                    db.ManCandidate.Add(cdal);
                    db.SaveChanges();
                    return cdal.codeCandidates;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return -1;
            }
        }

        public static int AddWomanCandidates(WomenCandidate cdal)
        {
            try
            {

                using (The_MatchmakerEntities db = new The_MatchmakerEntities())
                {
                    db.Candidates.Add(cdal.Candidates);

                    db.SaveChanges();
                    db.WomenCandidate.Add(new WomenCandidate { codeCandidates = cdal.Candidates.codeCandidates });
                    db.SaveChanges();
                    return cdal.Candidates.codeCandidates;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return -1;
            }
        }

        public static Candidates GetCandidate(int id)
        {
            using (The_MatchmakerEntities db = new The_MatchmakerEntities())
            {
               return GetAlAvailablecandidets()
                    .FirstOrDefault(c=>c.codeCandidates==id);
               
            }
        }

        //public static List<Candidates> Filteriing(Candidates c)
        //{
        //    using (The_MatchmakerEntities db = new The_MatchmakerEntities())
        //    {

        //        List<Candidates> candidetsList = db.Candidates.Select(x => c).ToList();
        //        return candidetsList;
        //    }
        //}

        public static List<Candidates> GetAlAvailablecandidets()
        {
            try
            {
                using (The_MatchmakerEntities db = new The_MatchmakerEntities())
                {
                    db.Database.CommandTimeout = 60;

                    return db.Candidates
                          .Include(c => c.community)
                          .Include(c => c.Contacts)
                          .Include(c => c.ManCandidate)
                          .Include(c => c.WomenCandidate)
                          .Include("community1")
                          .Include("MosdotToCandidate")
                          .Include("Siblings")
                          .Include("MosdotToCandidate.ListOfMosdot")
                          .Include(c => c.CandidateStatuses)
                          .Include(c => c.Status1)
                          .Include(c => c.OccupationTypes)
                          .Include(c => c.OccupationTypes1)
                          .Include(c => c.WhatImLookingFor)
                          .Include(c => c.CandidateWantedComunities)
                          .Include("CandidateWantedComunities.community")
                          .Include("CandidateStatuses.Status")
                          .Include(c => c.ProposalInProcess)
                          .Include(c => c.ProposalInProcess1)
                          .Where(c => c.inprocess!=false).ToList();
                }
            }
            catch (Exception e)
            {
                throw e;
                Console.WriteLine(e.InnerException);
                return null;
            }
        }
    }
}
