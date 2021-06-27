export class Contact{

    constructor(
        public ContactId?:number,
        public ContactName?:string,
        public PhoneNumber?:string,
        public description?:string,
        public CandidateId?:number
        
    )
    {
       this.ContactId=0;
    }
}