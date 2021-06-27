import { EventEmitter } from '@angular/core';
import { Output } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { WhatImLookingforMan } from 'class/WhatImLookingforMan';

@Component({
  selector: 'app-what-imlooking-for-man',
  templateUrl: './what-imlooking-for-man.component.html',
  styleUrls: ['./what-imlooking-for-man.component.css']
})
export class WhatImlookingForManComponent implements OnInit {

  wcm:WhatImLookingforMan=new WhatImLookingforMan();
  @Output() savemen:EventEmitter<WhatImLookingforMan>=new EventEmitter<WhatImLookingforMan>()
  constructor() { }

  ngOnInit(): void {
  }
  save()
  {
   this.savemen.emit(this.wcm)
  }
}
