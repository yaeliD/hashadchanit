import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { WhatImLookingforService } from 'app/services/what-im-lookingfor.service';
import { OccupationTyes } from 'class/OccupationTyes';
import { WhatImLookingForWomen } from 'class/WhatImLookingForWomen';

@Component({
  selector: 'app-what-imlooking-forwomen',
  templateUrl: './what-imlooking-forwomen.component.html',
  styleUrls: ['./what-imlooking-forwomen.component.css']
})
export class WhatImlookingForwomenComponent implements OnInit {

  occupationlist:OccupationTyes[]=[];
  showEda=false;
  mc:WhatImLookingForWomen=new WhatImLookingForWomen();
  @Output() savewomen:EventEmitter<WhatImLookingForWomen>=new EventEmitter<WhatImLookingForWomen>()

  constructor(public ser: WhatImLookingforService) { }

  ngOnInit(): void {
    this.getoccupationlist();
  }

  save()
  {
    this.savewomen.emit(this.mc)
  }

  getoccupationlist() { this.ser.getoccupationlist().subscribe(suc => { this.occupationlist = suc; console.log(suc); this.showEda = true; }); }// פו המציגה את רשימת מוסדות
}

