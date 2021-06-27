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
        public int stepPcode { get; set; }
        public int codeStep { get; set; }
        public Nullable<System.DateTime> dateStep { get; set; }
        public string comments { get; set; }
        public bool results { get; set; }

        public StepsOfProposalDto()
        {

        }
        public StepsOfProposalDto(StepsOfProposal s)
        {
            stepPcode = s.stepPcode;
            codeStep = s.codeStep;
            dateStep = s.dateStep;
            comments = s.comments;
            results = s.results;
        }
        public static StepsOfProposal Todal(StepsOfProposalDto s)
        {
            return new StepsOfProposal()
            {
                stepPcode = s.stepPcode,
                codeStep = s.codeStep,
                dateStep = s.dateStep,
                comments = s.comments,
                results = s.results
            };

        }
    }
}
