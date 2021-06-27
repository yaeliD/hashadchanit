import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import {Contact} from 'class/Contact';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  c:Contact[]=[];
  @Output() sendContact:EventEmitter<Contact[]> = new EventEmitter<Contact[]>();

  constructor() { }
  ngOnInit(): void {
    this.addContact();
  }

  addContact()
  {
   this.c.push( new Contact())

  }

  finish()
  {
    this.sendContact.emit(this.c);
  }


}
