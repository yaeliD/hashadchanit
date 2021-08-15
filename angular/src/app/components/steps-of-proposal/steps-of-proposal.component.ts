import { EventEmitter, Input } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { ServicMatchInProcessService } from 'app/services/servic-match-in-process.service';
import { StepsOfProposal } from 'class/StepsOfProposal';
import { TypesOfSteps } from 'class/TypesOfSteps';

@Component({
  selector: 'app-steps-of-proposal',
  templateUrl: './steps-of-proposal.component.html',
  styleUrls: ['./steps-of-proposal.component.css']
})
export class StepsOfProposalComponent implements OnInit {
  TypesOfStepsList:TypesOfSteps[]=[];
  showEda=false;
  i;
  @Input() mp:number;
  mc:StepsOfProposal[]=[];
  m:StepsOfProposal=new StepsOfProposal();
  @Output() sendtyps:EventEmitter<StepsOfProposal[]> = new EventEmitter<StepsOfProposal[]>();
  constructor(public router: Router,public ser : ServicMatchInProcessService) { }

  ngOnInit(): void {
    console.log(this.sendtyps)
    this.typsofsteps();
  }

  finish()
   {
     this.m.ProposalInProcessCode=this.mp;
     this.ser.addStepsOfProposal(this.m).subscribe(suc => { console.log(suc);});
    //  this.router.navigate(['']);

  }
  typsofsteps() { this.ser.typsofsteps(this.mp).subscribe(suc => { this.TypesOfStepsList = suc; console.log(suc); this.showEda = true; }); }// פו המציגה את רשימת מוסדות

}
