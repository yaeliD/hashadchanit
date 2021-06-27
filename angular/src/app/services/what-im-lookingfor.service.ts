
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
  return this.http.post<boolean>("https://localhost:44390//api/WhatLooking/addManWhatLooking",man)

}

AddWomanw(woman)
{
  if(woman.wigORhandkerchief==1)
  woman.wigORhandkerchief=true;
   else
   if(woman.wigORhandkerchief==2)
   woman.wigORhandkerchief=false;
  else
  woman.wigORhandkerchief=null;
  
  return this.http.post<boolean>("https://localhost:44390//api/WhatLooking/addWomanWhatLooking",woman)

}
 
}
