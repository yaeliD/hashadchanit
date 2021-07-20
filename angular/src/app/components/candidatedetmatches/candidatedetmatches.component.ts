import { ThisReceiver } from '@angular/compiler';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicMatchesService } from 'app/services/servic-matches.service';
import { Candidates } from 'class/Candidates';
import { FullCandidate } from 'class/FullCandidate';
import { MatchPosibility } from 'class/MatchPosibility';

@Component({
  selector: 'app-candidatedetmatches',
  templateUrl: './candidatedetmatches.component.html',
  styleUrls: ['./candidatedetmatches.component.css']
})
export class CandidatedetmatchesComponent implements OnInit {
  link;
  @Input() c: Candidates = new Candidates();
  listmatchesinprocess:MatchPosibility=new MatchPosibility();
  Man:FullCandidate=new FullCandidate();
  arrcandidate: Candidates[] = [];
  show: boolean=false;
  entermamad=false;
  mORs:boolean;
  hide:boolean=false;
  constructor(public router: Router, public ser: ServicMatchesService,  public route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  entermamad1()
  {
    if(this.entermamad==false)
       this.entermamad=true;  
       else
       this.entermamad=false;
  }
  delale()
  {this.hide=true;
  }
  // matchesinprocess(ca){ 
  //     this.router.navigate(["ditals" , this.listmatchesinprocess ]);
  //   this.listmatchesinprocess.push(new MatchPosibility(man,woman));
  //     this.delale();
  // }
}
