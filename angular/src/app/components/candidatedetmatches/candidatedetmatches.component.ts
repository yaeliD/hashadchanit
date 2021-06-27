import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicMatchesService } from 'app/services/servic-matches.service';
import { Candidates } from 'class/Candidates';

@Component({
  selector: 'app-candidatedetmatches',
  templateUrl: './candidatedetmatches.component.html',
  styleUrls: ['./candidatedetmatches.component.css']
})
export class CandidatedetmatchesComponent implements OnInit {
  link;
  c: Candidates = new Candidates();
  arrcandidate: Candidates[] = [];
  show: boolean=false;
  entermamad=false;
  mORs:boolean;
  constructor(public router: Router, public ser: ServicMatchesService,  public route:ActivatedRoute) { }

  ngOnInit(): void {

  }

  showcandidate() {
      
      this.link = "/ditals/" + this.c.codeCandidates ;
    }

}
