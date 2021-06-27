using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
   public class MatchingDal
    {
        public List<Candidates> GetAllWomanCandidates()
        {
           
                using (The_MatchmakerEntities db = new The_MatchmakerEntities())
                {

                return db.WomenCandidate.Select(c => c.Candidates).ToList();
                }
            
        }

        public List<Candidates> GetAllManCandidates()
        {
            using (The_MatchmakerEntities db = new The_MatchmakerEntities())
            {

                return db.ManCandidate.Select(c => c.Candidates).ToList();
            }

        }

        public static List<Candidates> Mathescandidat()
        {
            using (The_MatchmakerEntities db = new The_MatchmakerEntities())
            {

                return db.Candidates.Select(c => c).ToList();
            }
        }
    }
}
