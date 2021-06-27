import { EventEmitter, Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ServicRegisterService } from 'app/services/servic-register.service';
import { ListOfMosdot } from 'class/ListOfMosdot';
import { MosdotToCandidate } from 'class/MosdotToCandidate';
import { from } from 'rxjs';

@Component({
  selector: 'app-mosdot-to-candidate',
  templateUrl: './mosdot-to-candidate.component.html',
  styleUrls: ['./mosdot-to-candidate.component.css']
})
export class MosdotToCandidateComponent implements OnInit {
  mosdList:ListOfMosdot[]=[];
  // mosdListwomen:ListOfMosdot[]=[];
  // mosdListman:ListOfMosdot[]=[];

  showEda=false;
  i;
  mc:MosdotToCandidate[]=[];
  m:MosdotToCandidate=new MosdotToCandidate();
  @Output() sendMosdotToCandidate:EventEmitter<MosdotToCandidate[]> = new EventEmitter<MosdotToCandidate[]>();
  constructor(public ser: ServicRegisterService) { }

  ngOnInit(): void {
    console.log(this.sendMosdotToCandidate)
    this.addmosad();
    this.findmosdot();
  }

  addmosad()
  {
   
   this.mc.push( new MosdotToCandidate());

  }

  finish()
   {
  //   for(let x of mc.langht)
  //   if(this.man)
  //     if(mc[x].sORy==false)
  //        this.c.Mosdot=mc[x];
  // else    
  // if(mc[x].sORy==true)
  //    this.c.Mosdot=mc[x];
    this.sendMosdotToCandidate.emit(this.mc);
  }
   findmosdot() { this.ser.findmosdot().subscribe(suc => { this.mosdList = suc; console.log(suc); this.showEda = true; }); }// פו המציגה את רשימת מוסדות


}
