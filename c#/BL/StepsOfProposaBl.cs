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
    public class StepsOfProposaBl

    {
        public static IEnumerable<StepsOfProposalDto> Getmachdetails(int id)
        {
            List<StepsOfProposal> StepsOfProposalDal = Dal.StepsOfProposaDal.Getmachdetails(id);
            List<StepsOfProposalDto> stepsOfProposalDto = StepsOfProposalDal.Select(s =>  StepsOfProposalDto.Todto(s)).ToList();
            return stepsOfProposalDto;
        }

        public static bool AddstepsOfProposal(StepsOfProposalDto m)
        {
            try
            {
                Dal.StepsOfProposal mDal = Dto.StepsOfProposalDto.Todal(m);
                Dal.StepsOfProposaDal.AddstepsOfProposal(mDal);
                return true;
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }
        }
    }
}
