import { Component, OnInit } from '@angular/core';
import { WhatImLookingFor } from 'class/WhatImLookingFor';
import {MatSliderModule} from '@angular/material/slider';
import { ActivatedRoute, Router } from '@angular/router';
import { community } from 'class/community';
import { WhatImLookingforService } from 'app/services/what-im-lookingfor.service';
import { WhatImLookingforMan } from 'class/WhatImLookingforMan';
import { WhatImLookingForWomen } from 'class/WhatImLookingForWomen';
import { CandidateWCommunity } from 'class/CandidateWCommunity';
import { Status } from 'class/Status';
import { CandidateStatus } from 'class/CandidateStatus';



@Component({
  selector: 'app-what-imlooking-for',
  templateUrl: './what-imlooking-for.component.html',
  styleUrls: ['./what-imlooking-for.component.css']
})
export class WhatImlookingForComponent implements OnInit {
manw:WhatImLookingforMan= new WhatImLookingforMan();
womanw:WhatImLookingForWomen =new WhatImLookingForWomen();
public man:boolean=false;
public woman:boolean=false;
isMan:boolean=null;
w:boolean;
m:boolean;
mw:boolean;


  wIl:WhatImLookingFor= new WhatImLookingFor;
  Comunitieslist:community[]=[];
  statusList:Status[]=[];
  showEda=false;
  constructor(public router: Router,public ser: WhatImLookingforService,
    public route:ActivatedRoute ) { }

  ngOnInit(): void {

    this.route.params.subscribe(
      p=>
      {this.isMan= p.isMan=="true"
     
      this.wIl.CodeCW=p.cId
      }
    )

    this.findAda();
   this. getStatusList();
  }
  selectstayus(ids)
  {
    this.wIl.status1.push(new CandidateStatus(0,ids,true));
  }
  selectComunity(idC)
  {

  this.wIl.Comunities.push(new CandidateWCommunity(0,idC,"",true));
  }

  getStatusList() { this.ser.getStatusList().subscribe(suc => { this.statusList = suc; console.log(suc); this.showEda = true; }); }// פו המציגה את רשימת העדות

  findAda() { this.ser.findAda().subscribe(suc => { this.Comunitieslist = suc; console.log(suc); this.showEda = true; }); }// פו המציגה את רשימת העדות
  addCandidates()
  {
    console.log(this.wIl)

    if(this.isMan)
    {
      this.manw.WhatLooking=this.wIl;
       this.ser.AddManw(this.manw).subscribe(suc =>{this.w=suc;})
       if(this.w)
       alert("mannn")
    }
       else
      {
       this.womanw.WhatLooking=this.wIl;
       this.ser.AddWomanw(this.womanw).subscribe(suc =>{this.w=suc;});
       if(this.w)
       alert("womannn")

       }

    }
    
    saveWoman(mc)
  {
   this.womanw=mc;
  }
  saveMan(wcm)
  {
    this.manw=wcm;
  }

}
