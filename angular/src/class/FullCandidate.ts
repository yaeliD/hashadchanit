import { Candidates } from "./Candidates";
import { WhatImLookingFor } from "./WhatImLookingFor";

export class FullCandidate{

    constructor(
        public Candidate?:Candidates,
        public WhatLooking?:WhatImLookingFor,
        public occupationAfter?:number,
        public OccupationAfterName?:string,
        public currentOccupation?:number,
        public currentOccupationName?: string,
        public wigORhandkerchief ?:boolean,
        public IsMan?:boolean,

    )
    {
        this.OccupationAfterName="";
        this.currentOccupationName="";
    }
}

