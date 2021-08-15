using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class StepsOfProposaDal
    {
        public static List<StepsOfProposal> Getmachdetails(int id)
        {
            using (The_MatchmakerEntities db = new The_MatchmakerEntities())
            {
                List<StepsOfProposal> stepList = db.StepsOfProposal.Where(x => x.ProposalInProcessCode==id).ToList();
                return stepList;
            }
        }

        public static StepsOfProposal  AddstepsOfProposal(StepsOfProposal mDal)
        {
            
                using (The_MatchmakerEntities db = new The_MatchmakerEntities())
                {
                    db.StepsOfProposal
                
                    .Add(mDal);
                    db.SaveChanges();
                    return mDal;
                }
         
         
        }
    }
}
