import { Component, OnInit } from '@angular/core';
import {DataService} from '../../../data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-loginleft',
  templateUrl: './loginleft.component.html',
  styleUrls: ['./loginleft.component.scss']
})
export class LoginleftComponent implements OnInit {
  username:"";
  password:"";
  submitted = false;
  constructor(public dataService: DataService,private router: Router) { }

  ngOnInit() {
  }

  onSubmit(){
    this.dataService.postLogin(this.username,this.password).subscribe((data) => {
      if(data['message'] == 'Success'){
        this.dataService.setUserInfo(true,data['data'].account,data['data'].companyGroup,data['data'].companyCount,true);//may set company Group and Company Name also here.
        //console.log(data);
        if(data['data'].account){
          if(data['data'].account.superAdmin == true && data['data'].companyCount == 0){
            this.router.navigate(['/accountSettings/company']);
          } else if(data['data'].account.superAdmin == true && data['data'].companyCount > 0){
            this.router.navigate(['/welcome']);
          } else if(data['data'].account.superAdmin == false){
            this.router.navigate(['/enterPIN']);  // have to create to enter PIN
          }
        }
      } else{
        //console.log(data['error']);
        this.dataService.setUserInfo(false,null,null,0,false);
      }
    });;
  }
}
