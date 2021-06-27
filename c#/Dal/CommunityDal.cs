using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class CommunityDal
    {
        public static List<community> GetAllEda()
        {
            try
            {
                using (The_MatchmakerEntities db = new The_MatchmakerEntities())
                {

                    List<community> edaList = db.community.Select(x => x).ToList();
                    return edaList;
                }
            }
            catch (Exception e)
            {
                Console.WriteLine(e);
                return null;
            }

        }

    }
}
