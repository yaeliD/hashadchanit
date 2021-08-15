import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicMatchInProcessService } from 'app/services/servic-match-in-process.service';
import { ServicMatchesService } from 'app/services/servic-matches.service';
import { Candidates } from 'class/Candidates';
import { FullCandidate } from 'class/FullCandidate';
import { MatchPosibility } from 'class/MatchPosibility';
import { ProposalInProcess } from 'class/ProposalInProcess';

@Component({
  selector: 'app-candidatedetmatches',
  templateUrl: './candidatedetmatches.component.html',
  styleUrls: ['./candidatedetmatches.component.css']
})
export class CandidatedetmatchesComponent implements OnInit {
  link;
  @Input() m?:MatchPosibility=new MatchPosibility();
  @Input() isMan:boolean;
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
  ProposalInProces:ProposalInProcess=new ProposalInProcess();
  constructor(public router: Router, public ser: ServicMatchesService,public ser1:ServicMatchInProcessService , public route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  public ngOnChanges(changes: SimpleChanges) {
    console.log("isMan: "+this.isMan)

}       

  entermamad1()
  {
    if(this.entermamad==false)
       this.entermamad=true;  
       else
       this.entermamad=false;
  }
  matchesinprocess(m,w)
  {//this.m.Man.Candidate.codeCandidatesthis.m.Woman.Candidate.codeCandidates
    this.ProposalInProces.codeBN=m;
    this.ProposalInProces.codeBT=w;
    this.ProposalInProces.stepMeeting=1;
    this.ser1.matchesinprocess(this.ProposalInProces).subscribe(suc =>{console.log(suc);
      this.router.navigate(["ProposalInProcess"]);})
      this.delale();
   // פה אני שולחת את הקודים של הזוג ושומרת הבדטה בהצעות בתהליך 
   // שולחת לדף הצעות 
     // matchesinprocess(ca){ 
  //     this.router.navigate(["ditals" , this.listmatchesinprocess ]);
  //   this.listmatchesinprocess.push(new MatchPosibility(man,woman));
  //     this.delale();
  // }
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
    if(id==this.codcan)
     this.codcan=0;
     else
   this.codcan=id;
  }

  delale()
  {this.hide=true;
    

  }

}
