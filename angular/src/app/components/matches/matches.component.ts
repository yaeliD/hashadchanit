import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicMatchesService } from 'app/services/servic-matches.service';
import { Candidates } from 'class/Candidates';
import { Candidesmane } from 'class/Candidesmane';
import { Candideswomen } from 'class/Candideswomen';
import { community } from 'class/community';
import { ListOfMosdot } from 'class/ListOfMosdot';
import { OccupationTyes } from 'class/OccupationTyes';
import { Serch } from 'class/Serch';
import { Status } from 'class/Status';

@Component({
  selector: 'app-matches',
  templateUrl: './matches.component.html',
  styleUrls: ['./matches.component.scss']
})
export class MatchesComponent implements OnInit {
  w: Candideswomen = new Candideswomen();
  cc:Candidates=new Candidates();
  m: Candidesmane = new Candidesmane();
  c:Serch=new Serch();
  arrcandidtes:Candidates[]=[];
  arrcandidtesEzer:Candidates[]=[];
  occupationlist:OccupationTyes[]=[];
  mosdList:ListOfMosdot[]=[];
  statusList:Status[]=[];
  macheslist: Candidates[] = [];
  arrAda:community[]=[];
  serchlist:Serch[]=[];
  showEda=false;
  shows=false;
  showocc=false;
  usernow: string;
  view: boolean=true;
  flag:boolean;
  mORs: boolean;
  constructor(public ser: ServicMatchesService, public router: Router) { }

  ngOnInit() {
    this.usernow = sessionStorage.getItem("userNow");
    if(this.usernow!="y")
    {
      this.view=false;
    }
    this.findAda();
    this.getoccupationlist();
    this.getStatusList();
    this.findmosdot();
    this.matches();
    
  }
//פו של סינון לפי טבלאות שמורות 
// פו המציגה את רשימת העדות
findAda() { this.ser.findAda().subscribe(suc => { this.arrAda = suc; console.log(suc); this.showEda = true; }); }// פו המציגה את רשימת העדות
getStatusList() { this.ser.getStatusList().subscribe(suc => { this.statusList = suc; console.log(suc); this.shows = true; }); }// פו המציגה את רשימת סטטוס
getoccupationlist() { this.ser.getoccupationlist().subscribe(suc => { this.occupationlist = suc; console.log(suc); this.showocc = true; }); }// פו המציגה את רשימת עיסוק
findmosdot() { this.ser.findmosdot().subscribe(suc => { this.mosdList = suc; console.log(suc); this.showEda = true; }); }// פו המציגה את רשימת מוסדות


matches()
{
  this.ser.matches().subscribe(suc => {this.macheslist=suc; console.log("suc"),  this.mORs=true},err=>{console.log("err")});
  // this.router.navigate(['short',this.mORs]);

}
onclick()
{
  this.ser.filtering(this.c).subscribe(suc => {this.serchlist=suc; console.log("suc")},err=>{console.log("err")});
  this.mORs=false;
  // this.router.navigate(['short',this.mORs]);
}
 onclickB()
{
  this.mORs=true;
  // this.matches();
}

}