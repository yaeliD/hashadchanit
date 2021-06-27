using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
  public  class SiblingDto
    {
        
        public SiblingDto()
        {

        }
        public SiblingDto(Siblings s1)
        {
            this.siblingId = s1.siblingId;
            candidateId = s1.candidateId;
            name = s1.name;
            datebir = s1.datebir;
            isMarried = s1.isMarried;
            description = s1.description;
        }

        public int siblingId { get; set; }
        public int candidateId { get; set; }
        public string name { get; set; }
        public System.DateTime datebir { get; set; }
        public Nullable<bool> isMarried { get; set; }
        public string description { get; set; }

        internal static Siblings Todal(SiblingDto s1)
        {
            return new Siblings()
            {
                 siblingId = s1.siblingId,
                 candidateId = s1.candidateId,
                 name = s1.name,
                datebir = s1.datebir,
                 isMarried = s1.isMarried,
                 description = s1.description,

            };
        }
    }
}
