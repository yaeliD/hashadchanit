import { community } from './../../../class/community';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Candidates } from './../../../class/Candidates';
import { ServicRegisterService } from '../../services/servic-register.service';
import { WhatImLookingFor } from 'class/WhatImLookingFor';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Status } from 'class/Status';
import { Candidesmane } from 'class/Candidesmane';
import { Candideswomen } from 'class/Candideswomen';
import { Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { ListOfMosdot } from 'class/ListOfMosdot';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
 public man:boolean=false;
 public woman:boolean=false;
 i:number;
  manC:Candidesmane=new Candidesmane();
  womanC:Candideswomen=new Candideswomen();
  womancw:boolean;
  statusList:Status[]=[];
  z:boolean=false;
  c: Candidates = new Candidates();
  w:WhatImLookingFor= new WhatImLookingFor();
  returnValue: Candidates;
  arrAda: community[] = [];
  showEda: boolean = false;
  showcity: boolean = false;
  my: boolean = true;
  li: boolean = false;
  myf: boolean = false;  
  wIw: boolean = false;
  candidateArr: Candidates[] = [];
  form: any;
  st=false;
  code:number;
  manm:ListOfMosdot[]=[];
  womem:ListOfMosdot[]=[];
  isMan: boolean;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  isEditable = false;
  constructor(public router: Router, public ser: ServicRegisterService,private _formBuilder: FormBuilder) { }

  ngOnInit() {
   
    this.form = new FormGroup({
      FNameCandidates: new FormControl("", Validators.required),
      LNameCandidates: new FormControl("", Validators.required),
      heightCandidates: new FormControl("", Validators.required),
      dateOFbirth: new FormControl("", Validators.required),
    })
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  
    // this.siblings();
    // this.code=this.c.codeCandidates;

this.getStatusList();
    this.findAda();
    
  }
  getStatusList() { this.ser.getStatusList().subscribe(suc => { this.statusList = suc; console.log(suc); this.st = true; }); }// פו המציגה את רשימת העדות

  addCandidates()// פו הוספת מועמד חדש למערכת 
  {
    // for (let x of this.candidateArr) {
    //   //לשנות כי אין כבר פון ליצירת קשר *********
    //    if (this.c.dateOFbirth == x.dateOFbirth&&this.c.phone==x.phone) {
    //      alert("הנך קיים במערכת");
        
    //    }
    //    else {
    
    console.log(this.manC+" "+this.womanC)
    if(this.c.photoLink)
    {this.c.photoLink =this.c.photoLink.slice(12);}  
   
     
      if(this.man)
          {
            this.manC.Candidate=this.c;
            this.isMan=true;
             this.ser.AddMan(this.manC).subscribe(res=>this.save(res))
          }
             else
            {
              this.isMan=false;
             this.womanC.Candidate=this.c;
             this.ser.AddWoman(this.womanC).subscribe(res=>this.save(res));
             }
         // this.ser.AddCandidates(this.c)

          alert("נרשמת בהצלחה!");
     //  }
    // }
  }
  saveWoman(wc)
  {
   this.womanC=wc;
  }
  saveMan(mc)
  {
    this.manC=mc;
  }
  save(cId)
  {
    this.router.navigate(['whatimlookingfor',this.isMan,cId]);
  }
  step:number=1;
  next()
  {
    
      this.step++;   
  }
  return(){
    this.step--;
  }

  saveSiblings(siblings)
  {
    this.c.Siblings=siblings;
     console.log(this.c)
     this.next()
  }
  // siblings()
  // {
  //   this.router.navigate([this.code])

  // }
  savemosdot(mc)
  {
    this.next()
    this.c.Mosdot=mc;
  }
  savecontact(c)
  {
    this.c.Contacts=c;
    this.addCandidates()
    console.log(this.c)
  }

  findAda() { this.ser.findAda().subscribe(suc => { this.arrAda = suc; console.log(suc); this.showEda = true; });}// פו המציגה את רשימת העדות
 // findcity() { this.ser.findcity().subscribe(suc => { this.arrcity = suc; console.log(suc); this.showcity = true; }); }// פו המציגה את רשימת העדות


}


