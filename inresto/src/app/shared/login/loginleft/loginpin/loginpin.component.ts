import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-loginpin',
  templateUrl: './loginpin.component.html',
  styleUrls: ['./loginpin.component.scss']
})
export class LoginpinComponent implements OnInit {
  pin1:number;
  pin2:number;
  pin3:number;
  pin4:number;

  constructor() { }

  ngOnInit() {
  }

  moveNext (event, element) {
    if(event.keyCode == ''){

    }
    else{
      element.focus();
    }
  }

}
