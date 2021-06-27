//------------------------------------------------------------------------------
// <auto-generated>
//     This code was generated from a template.
//
//     Manual changes to this file may cause unexpected behavior in your application.
//     Manual changes to this file will be overwritten if the code is regenerated.
// </auto-generated>
//------------------------------------------------------------------------------

namespace Dal
{
    using System;
    using System.Collections.Generic;
    
    public partial class Candidates
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public Candidates()
        {
            this.MosdotToCandidate = new HashSet<MosdotToCandidate>();
            this.ProposalInProcess = new HashSet<ProposalInProcess>();
            this.ProposalInProcess1 = new HashSet<ProposalInProcess>();
            this.CandidateStatuses = new HashSet<CandidateStatuses>();
            this.CandidateWantedComunities = new HashSet<CandidateWantedComunities>();
            this.Contacts = new HashSet<Contacts>();
            this.Siblings = new HashSet<Siblings>();
        }
    
        public int codeCandidates { get; set; }
        public string FNameCandidates { get; set; }
        public string LNameCandidates { get; set; }
        public System.DateTime dateOFbirth { get; set; }
        public double heightCandidates { get; set; }
        public string photoLink { get; set; }
        public Nullable<int> currentOccupation { get; set; }
        public string address { get; set; }
        public string nameFather { get; set; }
        public string nameMother { get; set; }
        public int AdaFather { get; set; }
        public int AdaMother { get; set; }
        public string occupationFather { get; set; }
        public string occupationMother { get; set; }
        public Nullable<int> status { get; set; }
        public string familyStatus { get; set; }
        public string phone { get; set; }
        public Nullable<bool> wigORhandkerchief { get; set; }
        public Nullable<int> occupationAfter { get; set; }
    
        public virtual ManCandidate ManCandidate { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<MosdotToCandidate> MosdotToCandidate { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ProposalInProcess> ProposalInProcess { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ProposalInProcess> ProposalInProcess1 { get; set; }
        public virtual WomenCandidate WomenCandidate { get; set; }
        public virtual community community { get; set; }
        public virtual community community1 { get; set; }
        public virtual OccupationTypes OccupationTypes { get; set; }
        public virtual OccupationTypes OccupationTypes1 { get; set; }
        public virtual Status Status1 { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CandidateStatuses> CandidateStatuses { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<CandidateWantedComunities> CandidateWantedComunities { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Contacts> Contacts { get; set; }
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<Siblings> Siblings { get; set; }
        public virtual WhatImLookingFor WhatImLookingFor { get; set; }
    }
}
