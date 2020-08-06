import { Component, OnInit, Input,EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-greet',
  templateUrl: './greet.component.html',
  styleUrls: ['./greet.component.css']
})
export class GreetComponent implements OnInit {

  constructor() { }

  @Input()
  msg='Default Greeting'

  @Output()
  cData=new EventEmitter()

  ngOnInit(): void {
  }

  fun(){
  this.cData.emit('Good Morning Too');
  }


}
