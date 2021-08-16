import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';




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
import { ShiducimComponent } from './components/shiducim/shiducim.component';
import { MaterialModule } from './material/material.module';
import { AbbreviatedfilteringComponent } from './components/abbreviatedfiltering/abbreviatedfiltering.component';
import { StepsOfProposalComponent } from './components/steps-of-proposal/steps-of-proposal.component';
import { MatchinprocesssortComponent } from './components/matchinprocesssort/matchinprocesssort.component';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { MatchThatClosedSuccessfullyComponent } from './components/match-that-closed-successfully/match-that-closed-successfully.component';
import { MatchThatClosedSuccessfullydiComponent } from './components/match-that-closed-successfullydi/match-that-closed-successfullydi.component';




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
   CandidatedetmatchesComponent,
   ShiducimComponent,
   AbbreviatedfilteringComponent,
   StepsOfProposalComponent,
   MatchinprocesssortComponent,
   MatchDetailsComponent,
   MatchThatClosedSuccessfullyComponent,
   MatchThatClosedSuccessfullydiComponent
  ],
  imports: [
    
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    CommonModule,
    HttpClientModule,
    MaterialModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
