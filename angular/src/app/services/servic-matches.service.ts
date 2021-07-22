import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidates } from 'class/Candidates';
import { community } from 'class/community';
import { FullCandidate } from 'class/FullCandidate';
import { ListOfMosdot } from 'class/ListOfMosdot';
import { MachestoOunCDto } from 'class/MachestoOunCDto';
import { MatchPosibility } from 'class/MatchPosibility';
import { OccupationTyes } from 'class/OccupationTyes';
import { ProposalInProcess } from 'class/ProposalInProcess';
import { Serch } from 'class/Serch';
import { Status } from 'class/Status';
import { WhatImLookingFor } from 'class/WhatImLookingFor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicMatchesService {
  constructor(public http:HttpClient) { }
  matchesinprocess(candidets:ProposalInProcess){
    return this.http.post<ProposalInProcess>("https://localhost:44390//api/ProposalInProcess/Matchesinprocess",candidets)

  } 
  
  showsortcandidate()
  {
    return this.http.get<Candidates[]>("https://localhost:44390//api/candidets/mathescandidat")
  
  }

getcandidatedetails(r:string)
{
  return this.http.get<Candidates>("https://localhost:44390//api/Candidates/detailsCandidates"+r)
}
findAda()
{
    return this.http.get<community[]>("https://localhost:44390//api/community/getAllEda")
}

getStatusList()
{
    return this.http.get<Status[]>("https://localhost:44390//api/status/getStatusList")
}
findmosdot()
{
 return this.http.get<ListOfMosdot[]>("https://localhost:44390//api/listofmosdot/getAllmosdot")

}

getoccupationlist()
{
  return this.http.get<OccupationTyes[]>("https://localhost:44390//api/OccupationTyes/getAoccuption")

 }
 
 getallcandidet(c)
{
  return this.http.get<FullCandidate>("https://localhost:44390//api/Candidates/getAcandidtes/"+c)

 }
 filtering(c:Serch)
 {
   console.log(JSON.stringify(c))
  return this.http.post<Candidates[]>("https://localhost:44390//api/Candidates/fiiltering",c)
  debugger
 }
 
 findmaches(cc:MachestoOunCDto){
  return this.http.post<FullCandidate[][]>("https://localhost:44390//api/matchaes/Findmaches",cc)
 }
 
 FindCandidatebyfilterparm(cc:MachestoOunCDto){
  return this.http.post<FullCandidate>("https://localhost:44390//api/matchaes/Findcandidatebyfilterparm",cc)
 }
 matches()
 {
  return this.http.get<MatchPosibility[]>("https://localhost:44390//api/matchaes/findAllMatchesForCandidate")
 }
//  addCandidates(w:WhatImLookingFor)matchaes
// {
//   return this.http.post<WhatImLookingFor>("https://localhost:44390//api/Candidates/addWomanCandidates",w)

// }


}
