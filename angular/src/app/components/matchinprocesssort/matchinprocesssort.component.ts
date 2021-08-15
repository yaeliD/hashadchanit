import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicMatchInProcessService } from 'app/services/servic-match-in-process.service';
import { ServicMatchesService } from 'app/services/servic-matches.service';
import { Candidates } from 'class/Candidates';
import { FullCandidate } from 'class/FullCandidate';
import { MatchPosibility } from 'class/MatchPosibility';
import { ProposalInProcess } from 'class/ProposalInProcess';

@Component({
  selector: 'app-matchinprocesssort',
  templateUrl: './matchinprocesssort.component.html',
  styleUrls: ['./matchinprocesssort.component.css']
})
export class MatchinprocesssortComponent implements OnInit {
  link;
  @Input() m?:ProposalInProcess=new ProposalInProcess();
  @Input() identity?:number;
  Man:FullCandidate=new FullCandidate();
  arrcandidate: Candidates[] = [];
  show: boolean=false;
  entermamad=false;
  mORs:boolean;
  hide:boolean=false;
  codcan :number=0;
  man:boolean=false;
  woman:boolean=false;
  SHOW:Boolean=false;
  addf:Boolean=false;
  ProposalInProces:ProposalInProcess=new ProposalInProcess();
  constructor(public router: Router,public ser:ServicMatchInProcessService , public route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log("proccess "+this.m)
  }
  showm()
  {
    if(this.SHOW==false)
       this.SHOW=true;  
       else
       this.SHOW=false;
  }
  addff()
  {
    if(this.addf==false)
    this.addf=true;  
    else
    this.addf=false;  }
  entermamad1()
  {
    if(this.entermamad==false)
       this.entermamad=true;  
       else
       this.entermamad=false;
  }
  n()
  {
    this.man=true;
  }
  w()
  {
  this.woman=true;
  }
  ditails(id)
  {
    this.SHOW=false;
    if(id==this.codcan)
     this.codcan=0;
     else
   this.codcan=id;
  }

  delale()
  {this.hide=true;
    //לעדכן סטטוס
  }
  savetyps(typsofsteps)
  {
    this.m.stepMeeting=typsofsteps;
  }
 
}
