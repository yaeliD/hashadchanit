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

            return Mathescandidat().Where(c=>c.WomenCandidate!=null).ToList();

        }

        public List<Candidates> GetAllManCandidates()
        {
            using (The_MatchmakerEntities db = new The_MatchmakerEntities())
            {

                return Mathescandidat().Where(c => c.ManCandidate != null).ToList();

            }

        }



        public static List<Candidates> Mathescandidat()
        {
            using (The_MatchmakerEntities db = new The_MatchmakerEntities())
            {

                return CandidatesDal.GetAlAvailablecandidets();
            }
        }
    }
}
