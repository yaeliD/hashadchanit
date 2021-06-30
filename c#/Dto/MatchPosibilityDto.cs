using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
   public class MatchPosibilityDto
    {
        public ManCandidateDto Man { get; set; }
        public WomanCandidateDto Woman { get; set; }

        public MatchPosibilityDto()
        {

        }

        public MatchPosibilityDto(ManCandidate man,WomenCandidate woman)
        {
            Man = new ManCandidateDto(man);
            Woman = new WomanCandidateDto(woman);
        }
    }

}
