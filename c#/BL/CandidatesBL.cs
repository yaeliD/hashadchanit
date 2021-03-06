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

     

        public static FullCandidateDto GetAlcandidets(int id)
        {
            List<Candidates> candidetListDal = Dal.CandidatesDal.GetAlAvailablecandidets();

           FullCandidateDto candidetDTOs =new FullCandidateDto(candidetListDal.FirstOrDefault(c=>c.codeCandidates==id));
            return candidetDTOs;
        }
        public static List<candidatesDto> Filteriing(SearchDto s)
        {
            List<Candidates> candidates = Dal.CandidatesDal.GetAlAvailablecandidets();
            List<candidatesDto> matchingCandidates = new List<candidatesDto>();

            foreach (var item in candidates)
            {
                if ((string.IsNullOrEmpty(s.FirstName) || item.FNameCandidates.Contains(s.FirstName))
                    && (string.IsNullOrEmpty(s.LastName) || item.LNameCandidates.Contains(s.LastName))
                    && (string.IsNullOrEmpty(s.phone) || item.phone.Contains(s.phone))
                    && (s.MinAge == null || s.MinAge > item.dateOFbirth)
                    && (s.MaxAge == null || s.MaxAge < item.dateOFbirth)
                    && (s.statusid==null ||s.statusid==item.status)
                    && (s.IdEda == null || s.IdEda == item.AdaFather || s.IdEda == item.AdaMother)
                    && (s.wigORhandkerchief == null || s.wigORhandkerchief == item.wigORhandkerchief)
                    && (s.mosdid == null || item.MosdotToCandidate.Any(m=>m.codeMosad==s.mosdid))
                    && (s.occupationAfter == null || s.occupationAfter == item.occupationAfter)
                    && (s.currentOccupation == null || s.currentOccupation == item.currentOccupation))
                    
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