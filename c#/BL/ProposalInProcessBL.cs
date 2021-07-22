using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Web.Http;
using Dal;
using Dto;

namespace BL
{
    public class ProposalInProcessBL
    {
        public static bool AddMatchesinprocess(ProposalInProcessDto cc)
        {
            try
            {
                Dal.ProposalInProcess ccDal = Dto.ProposalInProcessDto.Todal(cc);
                Dal.ProposalInProcessDal.AddMatchesinprocess(ccDal);
                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }
        }

        public static List<ProposalInProcessDto> getProposalInProceslist()
        {
            List<ProposalInProcess> ProposalInProceslistDal = Dal.ProposalInProcessDal.getProposalInProceslist();
            List<ProposalInProcessDto> ProposalInProceslistDTOs = ProposalInProcessDto.Todto1(ProposalInProceslistDal);
            return ProposalInProceslistDTOs;
        }
    }
   
}
