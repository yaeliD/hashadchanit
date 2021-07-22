import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute , Router } from '@angular/router';
import { ServicMatchesService } from 'app/services/servic-matches.service';
import { Candidates } from 'class/Candidates';

@Component({
  selector: 'app-abbreviatedfiltering',
  templateUrl: './abbreviatedfiltering.component.html',
  styleUrls: ['./abbreviatedfiltering.component.css']
})
export class AbbreviatedfilteringComponent implements OnInit {
  @Input() c?: Candidates = new Candidates();

  hide: boolean=false;
  entermamad=false;

  constructor(public router: Router, public ser: ServicMatchesService,  public route:ActivatedRoute) { }

  ngOnInit(): void {
  }
  delale()
  {this.hide=true;
  }
  entermamad1()
  {
    if(this.entermamad==false)
    this.entermamad=true;  
    else
    this.entermamad=false;
  }
}
