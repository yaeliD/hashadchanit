using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace Dto
{
    public class ProposalInProcessDto
    {
        public int codeP { get; set; }
        public string womanFullName { get; set; }

        public int codeBT { get; set; }
        public string manFullName { get; set; }
        public int codeBN { get; set; }
        public Nullable<int> stepMeeting { get; set; }
    

        public ProposalInProcessDto()
        {

        }

     

        public static ProposalInProcess Todal(ProposalInProcessDto p)
        {
            return new ProposalInProcess()
            {
            codeP = p.codeP,
            codeBT = p.codeBT,
            codeBN = p.codeBN,
            stepMeeting = p.stepMeeting

        };

        }
        public static ProposalInProcessDto Todto(ProposalInProcess sdto)
        {
            return new ProposalInProcessDto()
            {
                codeP = sdto.codeP,
                codeBT = sdto.codeBT,
                codeBN = sdto.codeBN,
                stepMeeting = sdto.stepMeeting,
                manFullName = sdto.Candidates1.FNameCandidates + " " + sdto.Candidates1.LNameCandidates,
              womanFullName = sdto.Candidates.FNameCandidates + " " + sdto.Candidates.LNameCandidates


        };
        }
        public static List<ProposalInProcessDto> Todto1(List<ProposalInProcess> cc)
        {
            List<ProposalInProcessDto> dto = new List<ProposalInProcessDto>();
            foreach (var item in cc)
            {
                dto.Add(Todto(item));
            }
            return dto;


        }
    }
}
