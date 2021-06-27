using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.CompilerServices;

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



        //public static List<Candidates> Filteriing(Candidates c)
        //{
        //    using (The_MatchmakerEntities db = new The_MatchmakerEntities())
        //    {

        //        List<Candidates> candidetsList = db.Candidates.Select(x => c).ToList();
        //        return candidetsList;
        //    }
        //}

        public static List<Candidates> GetAlcandidets()
        {
            try
            {
                using (The_MatchmakerEntities db = new The_MatchmakerEntities())
                {

                    List<Candidates> candidetsList = db.Candidates.Select(x => x).ToList();
                    return candidetsList;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }
        }
    }
}
