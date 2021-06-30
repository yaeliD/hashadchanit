import { ServicShadchanitService } from '../../services/servic-shadchanit.service';
import { shadchanit } from './../../../class/shadchanit';
import { Component, OnInit } from '@angular/core';
import {Router } from '@angular/router';
import { FormControl, FormGroup, Validators } from '@angular/forms';



@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  s : shadchanit = new shadchanit;
  form: any;
  constructor(public router:Router ,public ser:ServicShadchanitService ) { }//

  ngOnInit() {
    this.form = new FormGroup({
      UserNameF: new FormControl("", Validators.required),
      UserPasswordF: new FormControl("", Validators.required)
    })
  }
  //בודק האם זה באמת השדכנית 
   loginShadchanit() 
   {
     this.ser.FindShadchanit(this.s).subscribe(suc=>{
      //found 
      
     if(suc==true){alert("ברוכים הבאים");this.router.navigate(["Matches"]); 
     sessionStorage.setItem("userNow", this.s.username);
    //  localStorage.setItem('password_shadchanit',this.s.password_shadchanit.toString());
    
    }
      //not found
       else if(suc==false){alert("אינך קיים במערכת");this.router.navigate(["Register"]);}
       //password not correct
       else{alert("סיסמה שגויה:");}
    })
      }
      
}



