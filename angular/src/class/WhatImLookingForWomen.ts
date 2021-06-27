import { WhatImLookingFor } from "./WhatImLookingFor";

export class WhatImLookingForWomen
{
  constructor( public occupationAfter ?:number,
    public OccupationAfterName?:string,
    public currentOccupation?:number ,
    public currentOccupationName?:string,
    public WhatLooking ?: WhatImLookingFor 
  )
  {
    this.OccupationAfterName="";
    this.currentOccupationName="";
  }
}