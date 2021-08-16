import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicMatchInProcessService } from 'app/services/servic-match-in-process.service';
import { ProposalInProcess } from 'class/ProposalInProcess';

@Component({
  selector: 'app-match-that-closed-successfully',
  templateUrl: './match-that-closed-successfully.component.html',
  styleUrls: ['./match-that-closed-successfully.component.css']
})
export class MatchThatClosedSuccessfullyComponent implements OnInit {
  ProposalInProceslistClosed:ProposalInProcess []=[];
  view:Boolean=true;
  display = "none";
  usernow: string;
  mORs:boolean=false;
  constructor(public ser:ServicMatchInProcessService , public router: Router) { }

  ngOnInit(): void {
    this.MatchThatClosedSuccessfully();
    this.openModal();

    this.usernow = sessionStorage.getItem("userNow");
    if(this.usernow!="y")
    {
      this.view=false;
    }
  }

  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
  MatchThatClosedSuccessfully()
 {
  console.log("ממתין");
  
  this.ser.MatchThatClosedSuccessfully().subscribe(suc => {this.ProposalInProceslistClosed=suc; console.log(suc);
  this.mORs=true   });

}
}
