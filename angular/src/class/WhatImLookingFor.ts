import { CandidateStatus } from "./CandidateStatus";
import { CandidateWCommunity } from "./CandidateWCommunity";


export class WhatImLookingFor{
    constructor(public MaxAge?:Date,public MinAge?:Date,public MaxHeight?:number,public MinHeight?:number,
        public CodeCW?:number,
        public description?:string,
        public Comunities?:CandidateWCommunity[],
        public status1?:CandidateStatus[]
        ){
            this.Comunities=[]
            this.status1=[]
        }
}




