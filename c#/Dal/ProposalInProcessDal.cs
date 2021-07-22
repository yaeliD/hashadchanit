using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Runtime.CompilerServices;
using System.Data.Entity;

namespace Dal
{
    public class ProposalInProcessDal
    {
        public static void AddMatchesinprocess(ProposalInProcess ccDal)
        {

                using (The_MatchmakerEntities db = new The_MatchmakerEntities())
                {
                    db.ProposalInProcess.Add(ccDal);
                    db.SaveChanges();
                    return ;
                }
            
          
        }

        public static List<ProposalInProcess> getProposalInProceslist()
        {
           
                try
                {
                    using (The_MatchmakerEntities db = new The_MatchmakerEntities())
                    {

                        List<ProposalInProcess> slist = db.ProposalInProcess.Select(x => x).ToList();
                        return slist;
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
