import { Input, SimpleChanges } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ServicMatchInProcessService } from 'app/services/servic-match-in-process.service';
import { StepsOfProposal } from 'class/StepsOfProposal';

@Component({
  selector: 'app-match-details',
  templateUrl: './match-details.component.html',
  styleUrls: ['./match-details.component.css']
})
export class MatchDetailsComponent implements OnInit {
  stepList:StepsOfProposal[]=[];
@Input() cm:number;
  constructor(public ser: ServicMatchInProcessService , public router: Router, public active: ActivatedRoute,  public route:ActivatedRoute) { }

  ngOnInit():void {
    this.getmachdetails(); 
        
    
      }
    
      ngOnChanges(changes: SimpleChanges) {
        this.getmachdetails();
      }
    
      getmachdetails()
      {
        this.ser.getmachDetails(this.cm).subscribe(suc => { this.stepList = suc; this.cm=-1;
        console.log(suc)})
      }
      

}
