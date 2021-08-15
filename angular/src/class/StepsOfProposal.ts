import { TypesOfSteps } from './TypesOfSteps';

export class StepsOfProposal{
    constructor(public ProposalInProcessCode ?: number ,
        public mynamestep?:string,
         public stepPcode?:number,
         public codeStep ?: number,
         public dateStep?:Date, 
         public comments ?: string, 
         public results?:boolean)
         {
        this.stepPcode=0;
        this.results=true;
        this.mynamestep="";
    }
}
