import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicMatchesService } from 'app/services/servic-matches.service';
import { Candidates } from 'class/Candidates';
import { Candidesmane } from 'class/Candidesmane';
import { Candideswomen } from 'class/Candideswomen';
import { community } from 'class/community';
import { FullCandidate } from 'class/FullCandidate';
import { ListOfMosdot } from 'class/ListOfMosdot';
import { MatchPosibility } from 'class/MatchPosibility';
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
  macheslist:MatchPosibility [] = []
  arrAda:community[]=[];
  serchlist:Candidates[]=[];
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

   
    this.matches();
    
  }



matches()
 {
  this.mORs=true;
  console.log("ממתין");
  this.ser.matches().subscribe(suc => {this.macheslist=suc; console.log(this.macheslist);
    console.log(this.mORs)});
  // ,err=>{ this.mORs=true, console.log("err")}

}


}