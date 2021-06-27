using System;
using Dto;
using Dal;
namespace BL
{
    public class shadchanitBL
    {
        public static bool GetShdchanit(ShadchanitDto s)
        {
            //בגלל שקיבלתי משתנה מסוג ללא קשרים מהאנגולר dto
            //אני צריכה להמיר אותו למשתנה עם קשרים וזה שווה dal

            Shadchnit newShadchanit = ShadchanitDto.Todal(s);
           return Dal.ShadchanitDal.GetShdchanit(newShadchanit);


        }
    }
}