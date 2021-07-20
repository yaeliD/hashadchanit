export class CandidateStatus
{
  constructor( public CandidateId ?:number,
    public StatusId ?:number,
    public Wanted ?: boolean , 
    public statusName?:string )
  {
//     this.CandidateId=0;
// this.StatusId=0;
  }
}