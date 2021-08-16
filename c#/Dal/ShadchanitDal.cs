using System;
using System.Linq;

namespace Dal
{
    public class ShadchanitDal
    {
        // הפו בודקת האם השדכנית קיימת במערכת 
        public static bool GetShdchanit(Shadchnit newShadchanit)
        {
            try
            {
                using (The_MatchmakerEntities DB = new The_MatchmakerEntities())
                {
                    bool answer = DB.Shadchnit.Where(x => x.username == newShadchanit.username &&
                    x.password_shadchanit == newShadchanit.password_shadchanit).Select(x => x.username).Any();
                    return answer;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return false;
            }
             
        }
    }
}
