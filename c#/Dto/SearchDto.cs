using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
   public class SearchDto
    {
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string phone { get; set; }
        public DateTime? MinAge { get; set; }
        public DateTime? MaxAge { get; set; }
        public int? statusid { get; set; }
        public int? IdEda { get; set; }
        public bool? wigORhandkerchief { get; set; }
        public int? mosdid { get; set; }
        public int? occupationAfter { get; set; }
        public int? currentOccupation { get; set; }

   
    }
}
