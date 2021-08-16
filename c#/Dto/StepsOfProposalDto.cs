using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace Dto
{
   public class StepsOfProposalDto
    {
        public int ProposalInProcessCode { get; set; }
        public string mynamestep { get; set; }
        public int stepPcode { get; set; }
        public int codeStep { get; set; }
        public Nullable<System.DateTime> dateStep { get; set; }
        public string comments { get; set; }
        public bool results { get; set; }




        public StepsOfProposalDto()
        {

        }
        //public StepsOfProposalDto(StepsOfProposal s)
        //{
        //    ProposalInProcessCode = s.ProposalInProcessCode;
        //    stepPcode = s.stepPcode;
        //    codeStep = s.codeStep;
        //    dateStep = s.dateStep;
        //    comments = s.comments;
        //    results = s.results;
        //}
        public static StepsOfProposalDto Todto(StepsOfProposal s)
        {
            return new StepsOfProposalDto()
            {
                ProposalInProcessCode = s.ProposalInProcessCode,
                stepPcode = s.stepPcode,
                codeStep = s.codeStep,
                dateStep = s.dateStep,
                comments = s.comments,
                results = (bool)s.results,
                mynamestep = s.TypesOfSteps.nameStep,
                //mynamestep=  s.codeStep==s.TypesOfSteps.codeTypeStep ? s.TypesOfSteps.nameStep: null,        



            };
        }
        public static List<StepsOfProposalDto> Todto1(List<StepsOfProposal> cc)
        {
            List<StepsOfProposalDto> dto = new List<StepsOfProposalDto>();
            foreach (var item in cc)
            {
                dto.Add(Todto(item));
            }
            return dto;


        }
        public static StepsOfProposal Todal(StepsOfProposalDto s)
        {
            return new StepsOfProposal()
            {
                ProposalInProcessCode = s.ProposalInProcessCode,
                stepPcode = s.stepPcode,
                codeStep = s.codeStep,
                dateStep = s.dateStep,
                comments = s.comments,
                results = s.results
            };

        }
    }
}
