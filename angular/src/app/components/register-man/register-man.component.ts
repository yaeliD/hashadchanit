import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { ControlContainer, NgForm } from '@angular/forms';
import { ServicRegisterService } from 'app/services/servic-register.service';
import { Candidesmane } from 'class/Candidesmane';
import { OccupationTyes } from 'class/OccupationTyes';

@Component({
  selector: 'app-register-man',
  templateUrl: './register-man.component.html',
  styleUrls: ['./register-man.component.css'],
  viewProviders: [{ provide: ControlContainer, useExisting: NgForm}]

})
export class RegisterManComponent implements OnInit {

  constructor( public ser: ServicRegisterService) { }
  occupationlist:OccupationTyes[]=[];
   mc:Candidesmane=new Candidesmane();
   
   showEda=false;
   @Output() saveMan:EventEmitter<Candidesmane>=new EventEmitter<Candidesmane>()

  ngOnInit(): void {
    this.getoccupationlist();
    // this.mc.OccupationAfterName=this.occupationlist[this.mc.occupationAfter-1].OccupationTypeName;
    // this.mc.currentOccupationName=this.occupationlist[this.mc.currentOccupation-1].OccupationTypeName;
  }

  save()
  {
    this.saveMan.emit(this.mc)
  }

  
  getoccupationlist() { this.ser.getoccupationlist().subscribe(suc => { this.occupationlist = suc; console.log(suc); this.showEda = true; }); }// פו המציגה את רשימת מוסדות
  }

