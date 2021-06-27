using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
   public class ManCandidateDto
    {
      

        public Nullable<int> occupationAfter { get; set; }
        public string OccupationAfterName { get; set; }
        public int? currentOccupation { get; set; }
        public string currentOccupationName { get; set; }
        public candidatesDto Candidate { get; set; }


        public ManCandidateDto()
        {

        }


        public ManCandidateDto(ManCandidate m)
        {
            occupationAfter = m.Candidates.occupationAfter;
            OccupationAfterName = m.Candidates.OccupationTypes.OccupationTypeName;
            currentOccupation = m.Candidates.currentOccupation;
            currentOccupationName = m.Candidates.OccupationTypes1.OccupationTypeName;
            Candidate = new candidatesDto(m.Candidates);
        }

        public static ManCandidate Todal(ManCandidateDto m)
        {
            ManCandidate wDal = new ManCandidate();
            wDal.Candidates = candidatesDto.Todal(m.Candidate);
            wDal.Candidates.occupationAfter = m.occupationAfter;
            wDal.Candidates.currentOccupation = m.currentOccupation;
            return wDal;

        }
        
    }
}
