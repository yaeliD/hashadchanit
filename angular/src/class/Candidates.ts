import {community} from './community';
import { Contact } from './Contact';
import { MosdotToCandidate } from './MosdotToCandidate';
import { Sibling } from './Sibling';
export class Candidates{
    constructor(public codeCandidates?:number,public FNameCandidates?:string,public LNameCandidates?:string,public status?:number,
        public dateOFbirth?:Date,public heightCandidates?:number,public photoLink?:string,public address?:string,
        public nameFather?:string,public nameMother?:string,public AdaFather?:number,public AdaMother?:number,
        public occupationFather?:string,public occupationMother?:string,  public familyStatus?:string,public AdaNameFather?:string,
        public AdaNameMother?:string, public phone?:string, public  StatusName?:string,public Siblings?:Sibling[],public Contacts?:Contact[],public Mosdot?:MosdotToCandidate[]
       ){
         
          this.codeCandidates=0;
          this.AdaNameFather="";
          this.AdaNameMother="";
          this.StatusName="";

       }





      
      

}  



    
   
