import { EventEmitter, Input, Output } from '@angular/core';
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
  mosdListman:ListOfMosdot[]=[];
  mosdListwomen:ListOfMosdot[]=[];

  showEda=false;
  i;
  mc:MosdotToCandidate[]=[];
  m:MosdotToCandidate=new MosdotToCandidate();
  man:number=0;
  woman:number=0;
  @Input () min?:boolean;
  @Output() sendMosdotToCandidate:EventEmitter<MosdotToCandidate[]> = new EventEmitter<MosdotToCandidate[]>();
  constructor(public ser: ServicRegisterService) { }

  ngOnInit(): void {
    console.log(this.sendMosdotToCandidate)
    this.addmosad();
    this.findmosdot();
    // this.miun();
   

  }
// miun()
// { debugger
//   for( let i=0 ;i<this.mosdList.length; i++)
//   {
//   if(this.min==true)
//   {
//     if(this.mosdList[i].sORy==false)
//     {
//       this.mosdListman[this.man]=this.mosdList[i];
//       this.man++;
//     }
//   }
//   else
//   {
//     if(this.mosdList[i].sORy==true)
//     {
//     this.mosdListwomen[this.woman]=this.mosdList[i];
//       this.woman++;
//     }
//   }
//  }
//  this.showEda = true;
// }
  addmosad()
  {
   
   this.mc.push( new MosdotToCandidate());

  }

  finish()
   {
    this.sendMosdotToCandidate.emit(this.mc);
  }
   findmosdot() { this.ser.findmosdot().subscribe(suc => { this.mosdList = suc; console.log(suc);this.showEda=true
  console.log("min "+this.min)
  this.mosdList=this.mosdList.filter(m=>m.sORy!=this.min)
  console.log(this.mosdList)
  }); }// פו המציגה את רשימת מוסדות


}
