using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dal
{
    public class occupationTypeDal
    {
        public static List<OccupationTypes> GetAoccuption()
        {
            try
            {
                using (The_MatchmakerEntities db = new The_MatchmakerEntities())
                {

                    List<OccupationTypes> occList = db.OccupationTypes.Select(x => x).ToList();
                    return occList;
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
