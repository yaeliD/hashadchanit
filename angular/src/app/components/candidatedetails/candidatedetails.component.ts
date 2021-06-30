import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicMatchesService } from 'app/services/servic-matches.service';
import { Candidates } from 'class/Candidates';
import { FullCandidate } from 'class/FullCandidate';
import { WhatImLookingFor } from 'class/WhatImLookingFor';

@Component({
  selector: 'app-candidatedetails',
  templateUrl: './candidatedetails.component.html',
  styleUrls: ['./candidatedetails.component.css']
})
export class CandidatedetailsComponent implements OnInit {
  c: FullCandidate = new FullCandidate();
  cmw:Candidates[]=[];
  arrcandidtes:FullCandidate;
  @Input() cm:Candidates =new Candidates();
  constructor(public ser: ServicMatchesService , public router: Router, public active: ActivatedRoute,  public route:ActivatedRoute) { }

  ngOnInit():void {
    //this.ser.getallcandidet().subscribe(suc => { this.arrcandidtes = suc; console.log(suc);});

    // this.route.params.subscribe(
    //   p=>
    //   {
    //   this.c.Candidate.codeCandidates=p.idc

    //   })
    this.c.Candidate.codeCandidates=this.cm.codeCandidates;
    this.ser.getallcandidet(this.c.Candidate.codeCandidates).subscribe(suc => { this.arrcandidtes = suc; console.log(this.arrcandidtes);});

  }


}



