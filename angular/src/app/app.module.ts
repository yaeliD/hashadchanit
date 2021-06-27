import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';


import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HashadchanitComponent } from './components/hashadchanit/hashadchanit.component';
import { RegisterComponent } from './components/register/register.component';
import { MatchesComponent } from './components/matches/matches.component';
import { MatchInProcessComponent } from './components/match-in-process/match-in-process.component';
import { HistoryOfMatchesComponent } from './components/history-of-matches/history-of-matches.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { LoginComponent } from './components/login/login.component';
import { CommonModule } from '@angular/common';
import { RegisterManComponent } from './components/register-man/register-man.component';
import { WhatImlookingForComponent } from './components/what-imlooking-for/what-imlooking-for.component';
import { WhatImlookingForManComponent } from './components/what-imlooking-for-man/what-imlooking-for-man.component';
import { WhatImlookingForwomenComponent } from './components/what-imlooking-forwomen/what-imlooking-forwomen.component';
import { AddSiblingComponent } from './components/add-sibling/add-sibling.component';
import {RegisterWomanComponent} from './components/register-woman/register-woman.component';
import { MosdotToCandidateComponent } from './components/mosdot-to-candidate/mosdot-to-candidate.component';
import { ContactComponent } from './components/contact/contact.component';
import { CandidatedetailsComponent } from './components/candidatedetails/candidatedetails.component';
import { CandidatedetmatchesComponent } from './components/candidatedetmatches/candidatedetmatches.component';




@NgModule({
  declarations: [
    AppComponent,
    HashadchanitComponent,
    RegisterComponent ,
    MatchesComponent ,
    MatchInProcessComponent ,
    HistoryOfMatchesComponent,
    LoginComponent,
    RegisterManComponent,
    WhatImlookingForComponent,
    WhatImlookingForManComponent,
    WhatImlookingForwomenComponent,
    AddSiblingComponent,
   RegisterWomanComponent,
   MosdotToCandidateComponent,
   ContactComponent,
   CandidatedetailsComponent,
   CandidatedetmatchesComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MatFormFieldModule,
    MatInputModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
