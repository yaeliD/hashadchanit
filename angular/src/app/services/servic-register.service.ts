import { Candidates } from './../../class/Candidates';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
 import { RegisterComponent } from './../components/register/register.component';
import { community } from 'class/community';
import { Candidesmane } from 'class/Candidesmane';
import { Candideswomen } from 'class/Candideswomen';
import { Status } from 'class/Status';
import { ListOfMosdot } from 'class/ListOfMosdot';
import { OccupationTyes } from 'class/OccupationTyes';
import { Observable } from 'rxjs';
import { Contact } from 'class/Contact';
import { Sibling } from 'class/Sibling';
import { MosdotToCandidate } from 'class/MosdotToCandidate';


@Injectable({
  providedIn: 'root'
})
export class ServicRegisterService {

 // candidate:Candidates=new Candidates();


constructor(public http:HttpClient) { }
AddMan(man):Observable<number>
{    //this.man.Candidate=this.candidate;
  return this.http.post<number>("https://localhost:44390//api/Candidates/addManCandidates",man)

}

AddWoman(woman):Observable<number>
{
  if(woman.wigORhandkerchief==1)
  woman.wigORhandkerchief=true;
   else
   if(woman.wigORhandkerchief==2)
   woman.wigORhandkerchief=false;
  else
  woman.wigORhandkerchief=null;
 
//   s
//console.log(JSON.stringify(woman))

// this.woman.Candidate=this.candidate;
  return this.http.post<number>("https://localhost:44390//api/Candidates/addWomanCandidates",woman)

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
}


