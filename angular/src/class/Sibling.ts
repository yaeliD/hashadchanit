export class Sibling
{
  constructor(public siblingId?:number,
    public candidateId?:number,
    public name?:string,
    public datebir?:Date,
    public isMarried?:boolean,
    public description?:string

  )
  {
   this.siblingId=0;
  }

//   public int siblingId { get; set; }
//   public int candidateId { get; set; }
//   public string name { get; set; }
//   public int age { get; set; }
//   public Nullable<bool> isMarried { get; set; }
//   public string description { get; set; }
}