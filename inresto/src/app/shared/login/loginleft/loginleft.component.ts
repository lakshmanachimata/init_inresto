import { Component, OnInit } from '@angular/core';
import { LoginService } from '../../../services/login.service';

@Component({
  selector: 'app-loginleft',
  templateUrl: './loginleft.component.html',
  styleUrls: ['./loginleft.component.scss']
})
export class LoginleftComponent implements OnInit {

  constructor(private loginService:LoginService) { }

  ngOnInit() {
  }

  login(){
    this.loginService.getLogin().subscribe((data) => {
      console.log('Login Data >> ');
      console.log(data);
    });;
  }


}
