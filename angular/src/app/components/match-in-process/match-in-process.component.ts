import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-match-in-process',
  templateUrl: './match-in-process.component.html',
  styleUrls: ['./match-in-process.component.scss']
})
export class MatchInProcessComponent implements OnInit {
  view: boolean = true;
  usernow: string;
  display = "none";

  constructor() { }

  ngOnInit() {
  this.openModal();
    this.usernow = sessionStorage.getItem("userNow");
    if (this.usernow != "y") {
      this.view = false;
    } 
  
  }
  openModal() {
    this.display = "block";
  }
  onCloseHandled() {
    this.display = "none";
  }
}


