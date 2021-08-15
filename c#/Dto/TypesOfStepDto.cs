using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace Dto
{
   public class TypesOfStepDto
    {
        public int codeTypeStep { get; set; }
        public string nameStep { get; set; }

        public TypesOfStepDto()
        {

        }
        public TypesOfStepDto(TypesOfSteps t)
        {
            codeTypeStep = t.codeTypeStep;
            nameStep = t.nameStep;
        }

        public static TypesOfSteps Todal(TypesOfStepDto t)
        {
            return new TypesOfSteps()
            {
                codeTypeStep = t.codeTypeStep,
                nameStep = t.nameStep,
        };

        }
        public static TypesOfStepDto Todto(TypesOfSteps sdto)
        {
            return new TypesOfStepDto()
            {
                codeTypeStep = sdto.codeTypeStep,
                nameStep = sdto.nameStep,

            };
        }
        public static List<TypesOfStepDto> Todto1(List<TypesOfSteps> cc)
        {
            List<TypesOfStepDto> dto = new List<TypesOfStepDto>();
            foreach (var item in cc)
            {
                dto.Add(Todto(item));
            }
            return dto;


        }
    }
}
