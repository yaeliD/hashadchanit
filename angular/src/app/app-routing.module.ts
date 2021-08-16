import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';
import { MatchesComponent } from './components/matches/matches.component';
import { LoginComponent } from './components/login/login.component';
import { HistoryOfMatchesComponent } from './components/history-of-matches/history-of-matches.component';
import { HashadchanitComponent } from './components/hashadchanit/hashadchanit.component';
import { MatchInProcessComponent } from './components/match-in-process/match-in-process.component';
import { WhatImLookingFor } from 'class/WhatImLookingFor';
import { WhatImlookingForComponent } from './components/what-imlooking-for/what-imlooking-for.component';
import { CandidatedetailsComponent } from './components/candidatedetails/candidatedetails.component';
import { AddSiblingComponent } from './components/add-sibling/add-sibling.component';
import { CandidatedetmatchesComponent } from './components/candidatedetmatches/candidatedetmatches.component';
import { ShiducimComponent } from './components/shiducim/shiducim.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { MatchDetailsComponent } from './components/match-details/match-details.component';
import { MatchThatClosedSuccessfullyComponent } from './components/match-that-closed-successfully/match-that-closed-successfully.component';


const routes: Routes = [
  {path:"login",component:LoginComponent},
  {path:"Register",component:RegisterComponent}, 
  {path:"Matches",component:MatchesComponent},
  {path:"HistoryOfMatches",component:HistoryOfMatchesComponent},
  {path:"Hashadchanit",component:HashadchanitComponent},
  {path:"MatchInProcess",component:MatchInProcessComponent},
  {path:"howdo",component:HistoryOfMatchesComponent},
  {path:"whatimlookingfor/:isMan/:cId",component:WhatImlookingForComponent},
  {path:"Candidatedetails/:code",component:CandidatedetailsComponent},
  {path:"siblings/:IDcn",component:AddSiblingComponent},
  {path:"ditals/:idc",component:CandidatedetailsComponent},
  {path:"short",component:CandidatedetmatchesComponent},
  {path:"shiduchim",component:ShiducimComponent},
  {path:"ProposalInProcess",component:MatchInProcessComponent},
  {path:"Machditails",component:MatchDetailsComponent},
  {path:"MatchThatClosedSuccessfully",component:  MatchThatClosedSuccessfullyComponent},

  {path:"",redirectTo:"/Hashadchanit",pathMatch:"full"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppRoutingModule { }
