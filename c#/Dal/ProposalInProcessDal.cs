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
                     db.Candidates.Where(c => c.codeCandidates == ccDal.codeBN || c.codeCandidates == ccDal.codeBT)
                    .ToList()
                    .ForEach(c=>c.inprocess=true);
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

                        List<ProposalInProcess> slist = db.ProposalInProcess.Include(p=>p.Candidates).Include(p=>p.Candidates1).Select(x => x).ToList();
                        return slist;
                    }
                }
                catch (Exception e)
                {
                    Console.WriteLine(e);
                    return null;
                }
            
        }

        public static List<TypesOfSteps> GetTypeOfStepsForProcess(int mp)
        {
            try
            {
                using (The_MatchmakerEntities db = new The_MatchmakerEntities())
                {
                    bool exist = db.StepsOfProposal.Any(s => s.ProposalInProcessCode == mp);
                    if (!exist)
                    {
                        List<TypesOfSteps> TypeOfStepsForProcessList = db.TypesOfSteps.Select(x => x).ToList();
                        return TypeOfStepsForProcessList;
                    }
                  
                    else
                    {
                        int lastStep = db.StepsOfProposal.Where(s => s.ProposalInProcessCode == mp).ToList().LastOrDefault().codeStep;
                        List<TypesOfSteps> edaList = db.TypesOfSteps.Where(x => x.codeTypeStep > lastStep).ToList();
                        return edaList;
                    }

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
