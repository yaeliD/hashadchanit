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
    
    public partial class StepsOfProposal
    {
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2214:DoNotCallOverridableMethodsInConstructors")]
        public StepsOfProposal()
        {
            this.ProposalInProcess = new HashSet<ProposalInProcess>();
        }
    
        public int stepPcode { get; set; }
        public int codeStep { get; set; }
        public Nullable<System.DateTime> dateStep { get; set; }
        public string comments { get; set; }
        public bool results { get; set; }
    
        [System.Diagnostics.CodeAnalysis.SuppressMessage("Microsoft.Usage", "CA2227:CollectionPropertiesShouldBeReadOnly")]
        public virtual ICollection<ProposalInProcess> ProposalInProcess { get; set; }
        public virtual TypesOfSteps TypesOfSteps { get; set; }
    }
}