using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Data.Entity;

namespace Dal
{
    public class StepsOfProposaDal
    {
        public static List<StepsOfProposal> Getmachdetails(int id)
        {
            using (The_MatchmakerEntities db = new The_MatchmakerEntities())
            {
                List<StepsOfProposal> stepList = db.StepsOfProposal.Include(m=>m.TypesOfSteps).Where(x => x.ProposalInProcessCode==id).ToList();
                return stepList;
            }
        }

        public static StepsOfProposal  AddstepsOfProposal(StepsOfProposal mDal)
        {
            
                using (The_MatchmakerEntities db = new The_MatchmakerEntities())
                {

                 ProposalInProcess p = db.ProposalInProcess.FirstOrDefault(x => x.codeP == mDal.ProposalInProcessCode);
                if (mDal.results == false || mDal.results == null && mDal.codeStep!=11)
                {
                    p.Candidates1.inprocess = null;
                    p.Candidates.inprocess = null;
                }
                else
                     if (mDal.results == false)
                {
                    p.Candidates1.inprocess = false;
                    p.Candidates.inprocess = false;
                }
                else
                     if (mDal.results == true)
                {
                    p.Candidates1.inprocess = true;
                    p.Candidates.inprocess = true;
                }
                db.StepsOfProposal
                
                    .Add(mDal);
                    db.SaveChanges();
          
                   
                    return mDal;
                }
         
         
        }
    }
}
