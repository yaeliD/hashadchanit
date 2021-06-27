import { Candidates } from "./Candidates";

export class Candidesmane{
    constructor(public occupationAfter ?:number,public OccupationAfterName ?:string,
      public currentOccupation?:number,public currentOccupationName ?:string,
       public Candidate?:Candidates,
    ){
       this.OccupationAfterName="";
       this.currentOccupationName="";
    }
    
    }