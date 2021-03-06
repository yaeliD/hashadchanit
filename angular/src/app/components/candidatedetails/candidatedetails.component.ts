import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';
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
  coui:string;
  @Input() cm:number;
  constructor(public ser: ServicMatchesService , public router: Router, public active: ActivatedRoute,  public route:ActivatedRoute) { }

  ngOnInit():void {
this.getCandidateDetailes(); 
    

  }

  ngOnChanges(changes: SimpleChanges) {
    this.getCandidateDetailes();
  }

  getCandidateDetailes()
  {
    this.ser.getallcandidet(this.cm).subscribe(suc => { this.c = suc;
      if(this.c.wigORhandkerchief==true)
this.coui="פאה";
if(this.c.wigORhandkerchief==false)
this.coui="מטפחת";
if(this.c.wigORhandkerchief==null)
this.coui="לא משנה"; console.log(this.c);});


  }


}



