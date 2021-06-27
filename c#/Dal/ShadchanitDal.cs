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
                    string answer = DB.Shadchnit.Where(x => x.username == newShadchanit.username &&
                    x.password_shadchanit == newShadchanit.password_shadchanit).Select(x => x.username).Any().ToString();
                    if (answer != "")
                        return true;
                    return false;
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
