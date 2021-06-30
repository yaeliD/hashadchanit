
import {WhatImLookingFor} from 'class/WhatImLookingFor';
import { Candidates } from './../../class/Candidates';
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { community } from 'class/community';
import { Candidesmane } from 'class/Candidesmane';
import { Candideswomen } from 'class/Candideswomen';
import { OccupationTyes } from 'class/OccupationTyes';
import { Observable } from 'rxjs';
import { Status } from 'class/Status';


@Injectable({
  providedIn: 'root'
})
export class WhatImLookingforService {


  constructor(public http:HttpClient) { }
  findAda()
  {
      return this.http.get<community[]>("https://localhost:44390//api/community/getAllEda")
  }
  getoccupationlist()
  {
    return this.http.get<OccupationTyes[]>("https://localhost:44390//api/OccupationTyes/getAoccuption")
 
   }
   getStatusList()
   {
       return this.http.get<Status[]>("https://localhost:44390//api/status/getStatusList")
   }
AddManw(man)
{   
  if(man.wigORhandkerchief==1)
  man.wigORhandkerchief=true;
   else
   if(man.wigORhandkerchief==2)
   man.wigORhandkerchief=false;
  else
  man.wigORhandkerchief=null;
  
  return this.http.post<boolean>("https://localhost:44390//api/WhatLooking/addManWhatLooking",man)

}

AddWomanw(woman)
{

  return this.http.post<boolean>("https://localhost:44390//api/WhatLooking/addWomanWhatLooking",woman)

}
 
}
