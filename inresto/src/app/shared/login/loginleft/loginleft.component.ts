import { Component, OnInit } from '@angular/core';
// import { FormsModule } from "@angular/forms";
import { LoginService } from '../../../services/login.service';
import { Account } from '../../../models/account.model';
import {DataService} from '../../../data.service';
import {Router} from "@angular/router"

@Component({
  selector: 'app-loginleft',
  templateUrl: './loginleft.component.html',
  styleUrls: ['./loginleft.component.scss']
})
export class LoginleftComponent implements OnInit {
  username:"";
  password:"";
  //account:Account;
  submitted = false;

  constructor(private loginService:LoginService, public dataService: DataService,private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.loginService.postLogin(this.username,this.password).subscribe((data) => {
      if(data['message'] == 'Success'){
        this.dataService.setIsUserLoggedIn(true,data['data'].account);
        console.log(data);
        this.router.navigate(['/welcome'])
      } else{
        console.log(data['error']);
        this.dataService.setIsUserLoggedIn(false,null);
      }
    });;
  }


}
