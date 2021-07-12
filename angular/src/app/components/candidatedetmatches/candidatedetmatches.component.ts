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
  m:MatchPosibility=new MatchPosibility();
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
this.entermamad=true;
  }
  delale()
  {this.hide=true;
  }
  matchesinprocess(){ 
      this.router.navigate(["ditals" , this.m ]);
      this.delale();
  }
}
