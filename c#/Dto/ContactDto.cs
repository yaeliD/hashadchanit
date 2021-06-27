using Dal;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace Dto
{
  public  class ContactDto
    {
        public ContactDto()
        {

        }
        public ContactDto(Contacts c1)
        {
            ContactId = c1.ContactId;
            ContactName = c1.ContactName;
            PhoneNumber = c1.PhoneNumber;
            description = c1.description;
            CandidateId = c1.CandidateId;
        }

        public int ContactId { get; set; }
        public string ContactName { get; set; }
        public string PhoneNumber { get; set; }
        public string description { get; set; }
        public int CandidateId { get; set; }

        internal static Contacts Todal(ContactDto c1)
        {

            return new Contacts()
            {
                ContactId = c1.ContactId,
                ContactName = c1.ContactName,
                PhoneNumber = c1.PhoneNumber,
                description = c1.description,
                CandidateId = c1.CandidateId,
            };
        }
    }
}
