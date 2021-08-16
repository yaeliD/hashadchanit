import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatchPosibility } from 'class/MatchPosibility';
import { ProposalInProcess } from 'class/ProposalInProcess';
import { StepsOfProposal } from 'class/StepsOfProposal';
import { TypesOfSteps } from 'class/TypesOfSteps';

@Injectable({
  providedIn: 'root'
})
export class ServicMatchInProcessService {

  constructor(public http:HttpClient) { }

  matchesinprocess(candidets:ProposalInProcess){
    return this.http.post<boolean>("https://localhost:44390//api/ProposalInProcess/Matchesinprocess",candidets)

  } 
  
  getmachDetails(mc:number){
    return this.http.get<StepsOfProposal[]>("https://localhost:44390//api/StepsOfProposa/GetmachDetails/"+mc)
}
 
  ProposalInProces(){
    return this.http.get<ProposalInProcess[]>("https://localhost:44390//api/ProposalInProcess/ProposalInProceslist")

  }
  MatchThatClosedSuccessfully(){
    return this.http.get<ProposalInProcess[]>("https://localhost:44390//api/ProposalInProcess/matchThatClosedSuccessfully")

  }
  typsofsteps(mp:number)
  {
    return this.http.get<TypesOfSteps[]>("https://localhost:44390//api/typsofsteps/Typsofsteps/"+mp)

  }
  addStepsOfProposal(m:StepsOfProposal)
  {
    return this.http.post<boolean>("https://localhost:44390//api/StepsOfProposa/AddStepsOfProposal",m)
 
  }
  
}
