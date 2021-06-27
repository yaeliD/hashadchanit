using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
  public  class WomanCandidateDto
    {
        public Nullable<bool> wigORhandkerchief { get; set; }
        public candidatesDto Candidate { get; set; }


        public WomanCandidateDto()
        {

        }
        public WomanCandidateDto(WomenCandidate w)
        {
            wigORhandkerchief = w.Candidates.wigORhandkerchief;
            Candidate = new candidatesDto(w.Candidates);

        }
        
        public static WomenCandidate Todal(WomanCandidateDto w)
        {
            WomenCandidate wDal = new WomenCandidate();
             wDal.Candidates= candidatesDto.Todal(w.Candidate);
             wDal.Candidates.wigORhandkerchief = w.wigORhandkerchief;
            return wDal;

        }
    }
}
