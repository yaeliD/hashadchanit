using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;
namespace Dto
{
  public  class MosdotToCandidateDto
    {


        public int codeMC { get; set; }
        public Nullable<int> codeMosad { get; set; }
        public string MosadName { get; set; }
        public int codeCandidate { get; set; }
        public Nullable<System.DateTime> yearOfFinish { get; set; }


        //get dal and convert it ti dto
        public MosdotToCandidateDto(MosdotToCandidate m)
        {
            codeMC = m.codeMC;
            codeMosad = m.codeMosad;
            codeCandidate = m.codeCandidate;
            yearOfFinish = m.yearOfFinish;
        }
        //
        //in order to make instance in the convertionss
        public MosdotToCandidateDto()
        {
                
        }



        //convert dto object to dal
        public static MosdotToCandidate Todal(MosdotToCandidateDto m)
        {
            return new MosdotToCandidate()
            {
                codeCandidate = m.codeCandidate,
                codeMC = m.codeMC,
                codeMosad=m.codeMosad,
                yearOfFinish=m.yearOfFinish
        
            };

        }


        //convert list of dto to dal
        public static List<MosdotToCandidate> TodalList(List<MosdotToCandidateDto> listm)
        {
            List<MosdotToCandidate> newList = new List<MosdotToCandidate>();
            foreach (MosdotToCandidateDto m in listm)
            {
                MosdotToCandidate mdal = MosdotToCandidateDto.Todal(m);
                newList.Add(mdal);
            }
            return newList;
        }


        //convert list of dal to dto
        public static List<MosdotToCandidateDto> ToDtoList(List<MosdotToCandidate> listm)
        {
            List<MosdotToCandidateDto> newList = new List<MosdotToCandidateDto>();
            foreach (MosdotToCandidate m in listm)
            {
                MosdotToCandidateDto mdto =new MosdotToCandidateDto(m);
                newList.Add(mdto);
            }
            return newList;
        }

    }
}
