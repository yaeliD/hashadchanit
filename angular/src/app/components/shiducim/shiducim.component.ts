import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicMatchesService } from 'app/services/servic-matches.service';
import { Candidates } from 'class/Candidates';
import { Candidesmane } from 'class/Candidesmane';
import { Candideswomen } from 'class/Candideswomen';
import { community } from 'class/community';
import { FullCandidate } from 'class/FullCandidate';
import { ListOfMosdot } from 'class/ListOfMosdot';
import { MachestoOunCDto } from 'class/MachestoOunCDto';
import { MatchPosibility } from 'class/MatchPosibility';
import { OccupationTyes } from 'class/OccupationTyes';
import { Serch } from 'class/Serch';
import { Status } from 'class/Status';

@Component({
  selector: 'app-shiducim',
  templateUrl: './shiducim.component.html',
  styleUrls: ['./shiducim.component.css']
})
export class ShiducimComponent implements OnInit {



  w: Candideswomen = new Candideswomen();
  cd:Candidates=new Candidates();
  m: Candidesmane = new Candidesmane();
  c:Serch=new Serch();
  cc:MachestoOunCDto=new MachestoOunCDto();
  arrcandidtes:Candidates[]=[];
  arrcandidtesEzer:Candidates[]=[];
  occupationlist:OccupationTyes[]=[];
  mosdList:ListOfMosdot[]=[];
  statusList:Status[]=[];
  macheslist:MatchPosibility [] = []
  arrAda:community[]=[];
  serchlist:Candidates[]=[];
  thiscandideta:Candidates[]=[];
  showEda=false;
  shows=false;
  showocc=false;
  usernow: string;
  view: boolean=true;
  flag:boolean;
  mORs: boolean;
  mORw:boolean=false;

  constructor(public ser: ServicMatchesService, public router: Router) { }

  ngOnInit(){
    this.usernow = sessionStorage.getItem("userNow");
    if(this.usernow!="y")
    {
      this.view=false;
    }
    this.findAda();
    this.getoccupationlist();
    this.getStatusList();
    this.findmosdot();
  }
//פו של סינון לפי טבלאות שמורות 
// פו המציגה את רשימת העדות
findAda() { this.ser.findAda().subscribe(suc => { this.arrAda = suc; console.log(suc); this.showEda = true; }); }// פו המציגה את רשימת העדות
getStatusList() { this.ser.getStatusList().subscribe(suc => { this.statusList = suc; console.log(suc); this.shows = true; }); }// פו המציגה את רשימת סטטוס
getoccupationlist() { this.ser.getoccupationlist().subscribe(suc => { this.occupationlist = suc; console.log(suc); this.showocc = true; }); }// פו המציגה את רשימת עיסוק
findmosdot() { this.ser.findmosdot().subscribe(suc => { this.mosdList = suc; console.log(suc); this.showEda = true; }); }// פו המציגה את רשימת מוסדות
  onclick()
{
  this.ser.filtering(this.c).subscribe(suc => {this.serchlist=suc; console.log(this.serchlist)},err=>{console.log(err)});
  if(this.serchlist==null)
  {
    alert("אין תוצאות");
  }
  this.mORs=false;
 
}
 onclickB()
{
  this.c.FirstName=null;
  this.c.LastName=null;
  this.c.MaxAge=null;
  this.c.MinAge=null;
  this.c.IdEda=null;
  this.c.currentOccupation=null;
  this.c.mosdid=null;
  this.c.occupationAfter=null;
  this.c.wigORhandkerchief=null;
  this.c.statusid=null;
  this.mORs=true;
}
a(){
debugger
  this.ser.findmaches(this.cc).subscribe(suc => {this.thiscandideta=suc; console.log(this.thiscandideta)},err=>{console.log("err")});
this.mORw=true;
}
minW(){
  this.cc.IsMan=true;
}
minM(){
  this.cc.IsMan=false;
}
sinun()
{
  this.cc.FirstName=null;
  this.cc.LastName=null;
  this.cc.phone=null;
  this.cc.IsMan=null;
  this.mORs=true;
}
}
