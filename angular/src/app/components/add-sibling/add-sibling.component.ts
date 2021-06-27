import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Sibling } from 'class/Sibling';

@Component({
  selector: 'app-add-sibling',
  templateUrl: './add-sibling.component.html',
  styleUrls: ['./add-sibling.component.css']
})
export class AddSiblingComponent implements OnInit {

  siblings:Sibling[]=[];
  s : Sibling =new Sibling ();
  @Output() sendSibling:EventEmitter<Sibling[]> = new EventEmitter<Sibling[]>();

  constructor(public router: Router,public route:ActivatedRoute) { }

  ngOnInit(): void {
    console.log(this.siblings)
    this.addSibling();
    this.route.params.subscribe(
      p=>
      {
      this.s.candidateId=p.IDcn
      })
  }

  addSibling()
  {
   
   this.siblings.push(new Sibling())

  }

  finish()
  {
    this.sendSibling.emit(this.siblings);
  }



}

