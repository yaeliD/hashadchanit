import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicMatchesService } from 'app/services/servic-matches.service';
import { Candidates } from 'class/Candidates';
import { WhatImLookingFor } from 'class/WhatImLookingFor';

@Component({
  selector: 'app-candidatedetails',
  templateUrl: './candidatedetails.component.html',
  styleUrls: ['./candidatedetails.component.css']
})
export class CandidatedetailsComponent implements OnInit {
  c: Candidates = new Candidates();
  w: WhatImLookingFor = new WhatImLookingFor();
  cmw:Candidates[]=[];
  arrcandidtes:Candidates;
  @Output() sendCandieta:EventEmitter<Candidates[]> = new EventEmitter<Candidates[]>();
  constructor(public ser: ServicMatchesService , public router: Router, public active: ActivatedRoute,  public route:ActivatedRoute) { }

  ngOnInit():void {
    //this.ser.getallcandidet().subscribe(suc => { this.arrcandidtes = suc; console.log(suc);});

    this.route.params.subscribe(
      p=>
      {
      this.c.codeCandidates=p.idc
      this.ser.getallcandidet(this.c.codeCandidates).subscribe(suc => { this.arrcandidtes = suc; console.log(suc);});

      })
  }


}



