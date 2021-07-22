import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatchPosibility } from 'class/MatchPosibility';
import { ProposalInProcess } from 'class/ProposalInProcess';

@Injectable({
  providedIn: 'root'
})
export class ServicMatchInProcessService {

  constructor(public http:HttpClient) { }

  matchesinprocess(candidets:ProposalInProcess){
    return this.http.post<boolean>("https://localhost:44390//api/ProposalInProcess/Matchesinprocess",candidets)

  } 
  

  ProposalInProces(){
    return this.http.get<MatchPosibility[]>("https://localhost:44390//api/ProposalInProcess/ProposalInProceslist")

  }
  
}
