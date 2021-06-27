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
    public class CandidatesBL
    {
        public static int AddManCandidates(ManCandidateDto c)
        {
                ManCandidate cdal = ManCandidateDto.Todal(c);
                int id = Dal.CandidatesDal.AddManCandidates(cdal);
                return id;
        }

        public static int AddWomanCandidates(WomanCandidateDto c)
        {
            WomenCandidate cdal = WomanCandidateDto.Todal(c);
            int id = Dal.CandidatesDal.AddWomanCandidates(cdal);
            return id;

        }

        public static List<candidatesDto> GetAlcandidets()
        {
            List<Candidates> candidetListDal = Dal.CandidatesDal.GetAlcandidets();
            List<candidatesDto> candidetDTOs = candidatesDto.Todto1(candidetListDal);
            return candidetDTOs;
        }



        public static List<candidatesDto> Filteriing(SearchDto s)
        {
            List<Candidates> candidates = Dal.CandidatesDal.GetAlcandidets();
            List<candidatesDto> matchingCandidates = new List<candidatesDto>();

            foreach (var item in candidates)
            {
                if ((string.IsNullOrEmpty(s.FirstName) || item.FNameCandidates.Contains(s.FirstName)
                    && (string.IsNullOrEmpty(s.LastName) || item.FNameCandidates.Contains(s.LastName)
                    && (s.MinAge == null || s.MinAge > item.dateOFbirth)
                    && (s.MinAge == null || s.MinAge > item.dateOFbirth)
                    && (s.statusid==null ||s.statusid==item.status)
                    && (s.IdEda == null || s.IdEda == item.AdaFather || s.IdEda == item.AdaMother)
                    && (s.wigORhandkerchief == null || s.wigORhandkerchief == item.wigORhandkerchief)
                   // && (s.mosdid == null || s.mosdid == item.MosdotToCandidate.co)
                    && (s.occupationAfter == null || s.occupationAfter == item.occupationAfter)
                    && (s.currentOccupation == null || s.currentOccupation == item.currentOccupation))))
                    
                    matchingCandidates.Add(new candidatesDto(item));
                    
            }

            return matchingCandidates;
            
        }
    }
}
//Users_tbl udal = UserDTO.ToDAL(u);
//Users_tbl utbl = DAL.UserDAL.Exist(udal);
//if (utbl == null)
//    return null;
//else
//return new UserDTO(utbl);