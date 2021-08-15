import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServicMatchInProcessService } from 'app/services/servic-match-in-process.service';
import { MatchPosibility } from 'class/MatchPosibility';
import { ProposalInProcess } from 'class/ProposalInProcess';

@Component({
  selector: 'app-match-in-process',
  templateUrl: './match-in-process.component.html',
  styleUrls: ['./match-in-process.component.scss']
})
export class MatchInProcessComponent implements OnInit {
  view: boolean = true;
  usernow: string;
  display = "none";
 ProposalInProceslist:ProposalInProcess []=[];
  mORs: boolean=false;
  constructor(public ser:ServicMatchInProcessService , public router: Router) { }

  ngOnInit() {
  this.openModal();
    this.usernow = sessionStorage.getItem("userNow");
    if (this.usernow != "y") {
      this.view = false;
    } 
   this.ProposalInProces();
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }




  ProposalInProces()
 {
  console.log("ממתין");
  
  this.ser.ProposalInProces().subscribe(suc => {this.ProposalInProceslist=suc; console.log(this.ProposalInProceslist);
    this.mORs=true; });
  // ,err=>{ this.mORs=true, console.log("err")}

}
 
}


