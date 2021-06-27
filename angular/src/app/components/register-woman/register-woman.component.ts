import { EventEmitter } from '@angular/core';
import { Component, OnInit, Output } from '@angular/core';
import { Candideswomen } from 'class/Candideswomen';

@Component({
  selector: 'app-register-woman',
  templateUrl: './register-woman.component.html',
  styleUrls: ['./register-woman.component.css']
})
export class RegisterWomanComponent implements OnInit {

  constructor() { }

  wc:Candideswomen=new Candideswomen();
  @Output() savewomen:EventEmitter<Candideswomen>=new EventEmitter<Candideswomen>()

  ngOnInit(): void {
  }
  save()
  {

   this.savewomen.emit(this.wc)
  }
}



// }
