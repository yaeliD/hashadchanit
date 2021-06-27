import { TypesOfSteps } from './TypesOfSteps';

export class StepsOfProposal{
    constructor(public codeStep ?: number, public dateStep?:Date, public comments ?: string, public results?:boolean){
        this.codeStep=0;
    }
}
 
