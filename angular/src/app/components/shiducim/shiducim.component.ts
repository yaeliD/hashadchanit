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
  bool:MatchPosibility[]=[];
  matches:MatchPosibility[]=[];
  findcandideta:FullCandidate=new FullCandidate();
  i:FullCandidate[]=[];
  arrcandidtes:Candidates[]=[];
  arrcandidtesEzer:Candidates[]=[];
  occupationlist:OccupationTyes[]=[];
  mosdList:ListOfMosdot[]=[];
  statusList:Status[]=[];
  macheslist:MatchPosibility [] = []
  arrAda:community[]=[];
  serchlist:Candidates[]=[];
  thiscandideta:FullCandidate[][]=[];
  showEda=false;
  shows=false;
  showocc=false;
  usernow: string;
  view: boolean=true;
  flag:boolean;
  mORs: boolean;
  mORw:boolean=false;
  item:number=0;
  ln:boolean=false;
  fn:boolean=false;
  gmin:boolean=false;
  gmax:boolean=false; 
  st :boolean=false;
  eda :boolean=false;
  r :boolean=false;
  mo:boolean=false;
  enow:boolean=false;
  after:boolean=false;
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
  selectthis(i){
  if(i==1 && this.fn==true )
     this.fn=false;
     else 
     if(i==1 && this.fn==false )
     this.fn=true;
  if(i==2 && this.ln==true )
     this.ln=false;
     else 
    if(i==2 && this.ln==false )
     this.ln=true; 
  if(i==3 && this.gmin==true)
     this.gmin=false;
     else
     if(i==3 && this.gmin==false)
     this.gmin=true;
  if(i==4 && this.gmax==true)
    this.gmax=false;
    else 
    if(i==4 && this.gmax==false)
    this.gmax=true;   
  if(i==5 && this.st==true)
    this.st=false;
    else
    if(i==5 && this.st==false)
    this.st=true;
  if(i==6 && this.eda==true)
    this.eda=false;
    else
    if(i==6 && this.eda==false)
    this.eda=true; 
  if(i==7 && this.r==true)
    this.r=false;
    else
    if(i==7 && this.r==false)
    this.r=true;
  if(i==8 && this.mo==true)
    this.mo=false;
    else 
    if(i==8 && this.mo==false)
    this.mo=true;  
  if(i==9 && this.enow==true)
    this.enow=false;
    else 
    if(i==9 && this.enow==false)
    this.enow=true;
  if(i==10 && this.after==true)
    this.after=false;
    else 
    if(i==10 && this.after==false)
    this.after=true;   
  }
//פו של סינון לפי טבלאות שמורות 
// פו המציגה את רשימת העדות
findAda() { this.ser.findAda().subscribe(suc => { this.arrAda = suc; console.log(suc); this.showEda = true; }); }// פו המציגה את רשימת העדות
getStatusList() { this.ser.getStatusList().subscribe(suc => { this.statusList = suc; console.log(suc); this.shows = true; }); }// פו המציגה את רשימת סטטוס
getoccupationlist() { this.ser.getoccupationlist().subscribe(suc => { this.occupationlist = suc; console.log(suc); this.showocc = true; }); }// פו המציגה את רשימת עיסוק
findmosdot() { this.ser.findmosdot().subscribe(suc => { this.mosdList = suc; console.log(suc); this.showEda = true; }); }// פו המציגה את רשימת מוסדות
  onclick()
{
this.ser.filtering(this.c).subscribe(suc => {this.serchlist=suc; console.log(this.serchlist)},err=>{this.serchlist=null; alert("אין תוצאות");
console.log(err)});
this.mORs=false;
 this. onclickB2();
}
onclickB2(){
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
findmaches(){

  this.ser.findmaches(this.cc).subscribe(suc => {this.thiscandideta=suc; console.log(this.thiscandideta)
  this.mORw=true;
  //למעלה הגדרה של מערך מסוג התאמותbool:MatchPosibility[]=[];  matches:
  //ץיש את הבחור
  //לולאה על הבחורות ומכניסה לכל בחורה גם את הבחור
 for( let i=0 ;i<2; i++)
{
  // console.log( this.thiscandideta[i].length)
  console.log( this.thiscandideta[i][1])

  for( let item of this.thiscandideta[i])
  {
      if(i==0)
     this.bool.push(new MatchPosibility(this.findcandideta,item));
     else
     this.matches.push(new MatchPosibility(this.findcandideta,item));
  }
}
},err=>{console.log("err")});


}
FindCandidatebyfilterparm(){
  this.ser.FindCandidatebyfilterparm(this.cc).subscribe(suc => {this.findcandideta=suc;
     console.log(this.thiscandideta)},err=>{console.log("err")});
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
