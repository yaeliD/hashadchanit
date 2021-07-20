using Dal;
using Dto;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace BL
{
    public class MatchingBL
    {


        MatchingDal matchingDal = new MatchingDal();

        public List<MatchPosibilityDto> FindAllMatches()
        {
            List<Candidates> manCandidates = matchingDal.GetAllManCandidates();
            List<MatchPosibilityDto> allPosibilties = new List<MatchPosibilityDto>();
            foreach (var m in manCandidates)
            {
                List<Candidates> matches = FindAllMatchesForCandidate(m);
                allPosibilties.AddRange(matches.Select(w => new MatchPosibilityDto(m.ManCandidate, w.WomenCandidate)).ToList());
            }

            return allPosibilties;

        }


        public List<Candidates> FindAllMatchesForCandidate(Candidates candidate)
        {

            List<Candidates> candidatesm = Dal.CandidatesDal.GetAlcandidets();
            List<Candidates> matchingCandidates = new List<Candidates>();

            List<Candidates> allOtherTypeCandidates;
            //if (candidate.ManCandidate != null)

            allOtherTypeCandidates = matchingDal.GetAllWomanCandidates();
            //else
            //    allOtherTypeCandidates = matchingDal.GetAllManCandidates();

            foreach (var c in allOtherTypeCandidates)
            {
                if ((c.wigORhandkerchief == null || c.wigORhandkerchief == candidate.wigORhandkerchief) &&
                    c.occupationAfter == candidate.occupationAfter &&
                    c.currentOccupation == candidate.currentOccupation &&
                    (candidate.CandidateWantedComunities.Any(mm => mm.ComunityId == c.AdaFather) ||
                     candidate.CandidateWantedComunities.Any(mm => mm.ComunityId == c.AdaMother)) &&
                    c.status == candidate.status &&
                    c.dateOFbirth > candidate.WhatImLookingFor.MinAge ||
                    c.dateOFbirth < candidate.WhatImLookingFor.MaxAge &&
                    c.heightCandidates > candidate.WhatImLookingFor.MinHeight ||
                    c.heightCandidates < candidate.WhatImLookingFor.MaxHeight)

                {

                    matchingCandidates.Add(c);

                }


            }

            return matchingCandidates;



        }

        public FullCandidateDto findcandidatebyfilterparm(MachestoOunCDto cc)
        {
            List<Candidates> candidetaListDal = Dal.MatchingDal.Mathescandidat();
            FullCandidateDto candidete = new FullCandidateDto( candidetaListDal.FirstOrDefault
                (c => (c.FNameCandidates.Contains(cc.FirstName) || c.LNameCandidates.Contains(cc.LastName)) && c.phone == cc.phone));
            return candidete;
        }

        public  List<FullCandidateDto>[] findMaches(MachestoOunCDto cc)
        {
            List<Candidates> candidetaListDal = Dal.MatchingDal.Mathescandidat();
            Candidates candidete = candidetaListDal.FirstOrDefault
                (c => (c.FNameCandidates.Contains(cc.FirstName) || c.LNameCandidates.Contains(cc.LastName)) && c.phone == cc.phone);


            List<Candidates> allCandidates=null;
            if (candidete == null)
                return null;

            if (candidete.ManCandidate == null)
                allCandidates = matchingDal.GetAllManCandidates();
            else allCandidates = matchingDal.GetAllWomanCandidates();
            List<Candidates> matchingBOOLCandidates = new List<Candidates>();
            List<Candidates> matchingCandidates = new List<Candidates>();

          

                foreach (var m in allCandidates)
                {
                    if ((m.wigORhandkerchief == null || m.wigORhandkerchief == candidete.wigORhandkerchief)
                         && (m.occupationAfter == candidete.occupationAfter)
                         && (m.currentOccupation == candidete.currentOccupation)
                         && (candidete.CandidateWantedComunities.Any(mm => mm.ComunityId == m.AdaFather))
                         || (candidete.CandidateWantedComunities.Any(mm => mm.ComunityId == m.AdaMother))
                         && (m.status == candidete.status)
                         && (m.dateOFbirth > candidete.WhatImLookingFor.MinAge || m.dateOFbirth < candidete.WhatImLookingFor.MaxAge)
                         && (m.heightCandidates > candidete.WhatImLookingFor.MinHeight ||
                          m.heightCandidates < candidete.WhatImLookingFor.MaxHeight))

                        matchingBOOLCandidates.Add(m);
                    else
                    {

                        if ((m.wigORhandkerchief == null || m.wigORhandkerchief == candidete.wigORhandkerchief) &&
                            (m.occupationAfter == candidete.occupationAfter)
                          && (m.currentOccupation == candidete.currentOccupation)
                          && (candidete.CandidateWantedComunities.Any(mm => mm.ComunityId == m.AdaFather))
                          || (candidete.CandidateWantedComunities.Any(mm => mm.ComunityId == m.AdaMother))
                          && (m.status == candidete.status)
                          && ((m.dateOFbirth > candidete.WhatImLookingFor.MinAge.Value.AddYears(- 1)) ||
                             (m.dateOFbirth < candidete.WhatImLookingFor.MaxAge.Value.AddYears(1)))
                          && ((m.heightCandidates > candidete.WhatImLookingFor.MinHeight - 5) ||
                              (m.heightCandidates < candidete.WhatImLookingFor.MaxHeight + 5)))

                            matchingCandidates.Add(m);
                    }
                }



            
            List<FullCandidateDto>[] res = new List<FullCandidateDto>[2];
            res[0] = matchingBOOLCandidates.Select(m=>new FullCandidateDto(m)).ToList();
            res[1] = matchingCandidates.Select(m => new FullCandidateDto(m)).ToList();
            return res;
            //else 
            //    return 
        }


    }
}
