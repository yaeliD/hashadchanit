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
        public int codeBT { get; set; }
        public int codeBN { get; set; }
        public Nullable<int> stepMeeting { get; set; }
    

        public ProposalInProcessDto()
        {

        }

        public ProposalInProcessDto(ProposalInProcess p)
        {
            codeP = p.codeP;
            codeBT = p.codeBT;
            codeBN = p.codeBN;
            stepMeeting = p.stepMeeting;


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
                stepMeeting = sdto.stepMeeting
         
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
