
import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http';
import { LoginComponent } from './../components/login/login.component';
import { shadchanit } from '../../class/shadchanit';
import { Status } from 'class/Status';

@Injectable({
  providedIn: 'root'
})
export class ServicShadchanitService {
  FindShadchanit(s:shadchanit)
  {
  
    return this.http.post<boolean>("https://localhost:44390//api/shadchanit/getShdchanit",s)
  }

 
  constructor(public http:HttpClient) { }
}
