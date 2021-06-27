export class CandidateStatus
{
  constructor( public CandidateId ?:number,
    public StatusId ?:number,
    public Wanted ?: boolean   )
  {
this.StatusId=0;
  }
}