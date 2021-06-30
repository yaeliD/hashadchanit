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
                allPosibilties.AddRange( matches.Select(w=>new MatchPosibilityDto(m.ManCandidate,w.WomenCandidate)).ToList());
            }

            return allPosibilties;

        }

    
        public  List<Candidates> FindAllMatchesForCandidate(Candidates candidate)
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
                if ((c.wigORhandkerchief == null || c.wigORhandkerchief == candidate.wigORhandkerchief )&&
                    c.occupationAfter == candidate.occupationAfter &&
                    c.currentOccupation == candidate.currentOccupation &&
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

    }
}
