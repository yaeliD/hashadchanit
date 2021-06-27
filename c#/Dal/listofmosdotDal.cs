using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
  public  class listofmosdotDal
    {
        public static List<ListOfMosdot> GetAllmosdot()
        {
            try
            {
                using (The_MatchmakerEntities db = new The_MatchmakerEntities())
                {

                    List<ListOfMosdot> mosdotList = db.ListOfMosdot.Select(x => x).ToList();
                    return mosdotList;
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
