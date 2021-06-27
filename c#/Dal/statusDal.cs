using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class statusDal
    {
        public static List<Status> GetAllEda()
        {
            try
            {
                using (The_MatchmakerEntities db = new The_MatchmakerEntities())
                {

                    List<Status> slist = db.Status.Select(x => x).ToList();
                    return slist;
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

