export class MachestoOunCDto{

    constructor(
        public FirstName ?:string,
        public LastName ?:string,
        public phone?:string,
        public IsMan?:boolean
        
    )
    {
this.FirstName="";
this.LastName="";
    }
}