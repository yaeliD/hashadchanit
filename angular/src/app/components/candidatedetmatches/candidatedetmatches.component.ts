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
  arrcandidate: Candidates[] = [];
  show: boolean=false;
  entermamad=false;
  mORs:boolean;
  constructor(public router: Router, public ser: ServicMatchesService,  public route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  // showcandidate() {
      
  //    this.router.navigate(["ditals" , this.c.codeCandidates ]);
  //   }
  // showcandidatem() {
      
  //     this.router.navigate(["ditals" , this.m.Man.Candidate.codeCandidates ]);
  //    }
  // showcandidatew() {
      
  //     this.router.navigate(["ditals" , this.m.Woman.Candidate.codeCandidates ]);
  //    }
  // entermamadm()
  // {
  //   if( this. entermamad=true)
  //     this. entermamad=false;
  //     else
  //     this. entermamad=true
  // }
  delale()
  {
    // delete(this.c);
  //  this.c=null;
  }
  matchesinprocess(){ 
      this.router.navigate(["ditals" , this.m ]);
      this.delale();
  }
}
