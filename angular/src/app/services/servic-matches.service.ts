import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Candidates } from 'class/Candidates';
import { community } from 'class/community';
import { ListOfMosdot } from 'class/ListOfMosdot';
import { OccupationTyes } from 'class/OccupationTyes';
import { Serch } from 'class/Serch';
import { Status } from 'class/Status';
import { WhatImLookingFor } from 'class/WhatImLookingFor';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicMatchesService {
  constructor(public http:HttpClient) { }
  
  
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
  return this.http.get<Candidates>("https://localhost:44390//api/candidets/getAcandidtes"+c)

 }
 filtering(c:Serch)
 {
  return this.http.get<Serch[]>("https://localhost:44390//api/candidets/fiiltering"+c)
 }
 matches()
 {
  return this.http.get<Candidates[]>("https://localhost:44390//api/matchaes/FindAllMatchesForCandidate")
 }
//  addCandidates(w:WhatImLookingFor)
// {
//   return this.http.post<WhatImLookingFor>("https://localhost:44390//api/Candidates/addWomanCandidates",w)

// }


}
