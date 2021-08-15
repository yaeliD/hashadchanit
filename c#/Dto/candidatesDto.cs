using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using Dal;

namespace Dto
{
    public class candidatesDto
    {
        public int codeCandidates { get; set; }
        public string FNameCandidates { get; set; }
        public string LNameCandidates { get; set; }
        public System.DateTime dateOFbirth { get; set; }
        public double heightCandidates { get; set; }
        public string photoLink { get; set; }


        public string address { get; set; }
        public string nameFather { get; set; }
        public string nameMother { get; set; }
        public int AdaFather { get; set; }
        public string AdaNameFather { get; set; }
        public int AdaMother { get; set; }
        public string AdaNameMother { get; set; }

        public string occupationFather { get; set; }
        public string occupationMother { get; set; }
        public Nullable<int> status { get; set; }
        public string StatusName { get; set; }
        public string familyStatus { get; set; }
        public string phone { get; set; }
        
        public Nullable<bool> inprocess { get; set; }

        public List<SiblingDto> Siblings { get; set; }
        public List<ContactDto> Contacts { get; set; }

        public List<MosdotToCandidateDto> Mosdot { get; set; }




        public candidatesDto(Candidates c)
        {
            codeCandidates = c.codeCandidates;
            FNameCandidates = c.FNameCandidates;
            LNameCandidates = c.LNameCandidates;
            dateOFbirth = c.dateOFbirth;
            heightCandidates = c.heightCandidates;
            photoLink = c.photoLink;
            address = c.address;
            nameFather = c.nameFather;
            nameMother = c.nameMother;
            AdaFather = c.AdaFather;
            AdaMother = c.AdaMother;
            occupationFather = c.occupationFather;
            occupationMother = c.occupationMother;
            status = c.status;
            familyStatus = c.familyStatus;
            phone = c.phone;
            AdaNameFather = c.community.nameC;
            AdaNameMother = c.community1.nameC;
            //  StatusName = c.status.statusName;
            inprocess = c.inprocess;
            if (c.Contacts != null && c.Contacts.Count() > 0)
                Contacts = c.Contacts.Select(c1 => new ContactDto(c1)).ToList();
            if (c.Siblings != null && c.Siblings.Count() > 0)
                Siblings = c.Siblings.Select(s1 => new SiblingDto(s1)).ToList();
            if (c.MosdotToCandidate != null && c.MosdotToCandidate.Count() > 0)
                Mosdot = c.MosdotToCandidate.Select(m => new MosdotToCandidateDto(m)).ToList();


        }

        public candidatesDto()
        {
        }

        //convert dto object to dal
        public static Candidates Todal(candidatesDto c)
        {
            return new Candidates
            {
                codeCandidates = c.codeCandidates,
                FNameCandidates = c.FNameCandidates,
                LNameCandidates = c.LNameCandidates,
                dateOFbirth = c.dateOFbirth,
                heightCandidates = c.heightCandidates,
                photoLink = c.photoLink,
                address = c.address,
                nameFather = c.nameFather,
                nameMother = c.nameMother,
                AdaFather = c.AdaFather,
                AdaMother = c.AdaMother,
                status = c.status,
                occupationFather = c.occupationFather,
                occupationMother = c.occupationMother,
                phone=c.phone,
                familyStatus = c.familyStatus,
                inprocess=c.inprocess,
                Contacts = c.Contacts.Select(c1 => ContactDto.Todal(c1)).ToList(),
                Siblings = c.Siblings.Select(s1 => SiblingDto.Todal(s1)).ToList(),
                MosdotToCandidate = c.Mosdot.Select(m => new MosdotToCandidate { codeMosad = m.codeMosad, yearOfFinish = m.yearOfFinish }).ToList()

            };

        }
        public static candidatesDto Todto(Candidates c)
        {
            return new candidatesDto()
            {

                codeCandidates = c.codeCandidates,
                FNameCandidates = c.FNameCandidates,
                LNameCandidates = c.LNameCandidates,
                dateOFbirth = c.dateOFbirth,
                heightCandidates = c.heightCandidates,
                photoLink = c.photoLink,
                address = c.address,
                nameFather = c.nameFather,
                nameMother = c.nameMother,
                AdaFather = c.AdaFather,
                AdaMother = c.AdaMother,
                status = c.status,
                occupationFather = c.occupationFather,
                occupationMother = c.occupationMother,
                phone = c.phone,
                familyStatus = c.familyStatus,
                inprocess=c.inprocess,
                Contacts = c.Contacts.Select(c1 => new ContactDto(c1)).ToList(),
                Siblings = c.Siblings.Select(s1 => new SiblingDto(s1)).ToList(),
                Mosdot = c.MosdotToCandidate.Select(m => new MosdotToCandidateDto(m)).ToList()

            };
        }
        public static List<candidatesDto> Todto1(List<Candidates> cc)
        {
            List<candidatesDto> dto = new List<candidatesDto>();
            foreach (var item in cc)
            {
                dto.Add(Todto(item));
            }
            return dto;


        }

    }


}
