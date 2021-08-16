import { Input } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicMatchInProcessService } from 'app/services/servic-match-in-process.service';
import { Candidates } from 'class/Candidates';
import { FullCandidate } from 'class/FullCandidate';
import { ProposalInProcess } from 'class/ProposalInProcess';

@Component({
  selector: 'app-match-that-closed-successfullydi',
  templateUrl: './match-that-closed-successfullydi.component.html',
  styleUrls: ['./match-that-closed-successfullydi.component.css']
})
export class MatchThatClosedSuccessfullydiComponent implements OnInit {
  link;
  @Input() m?:ProposalInProcess=new ProposalInProcess();

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
}
