import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { FormsModule } from '@angular/forms';
import { CarouselConfigComponent } from './carousel-config/carousel-config.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginleftComponent } from './loginleft/loginleft.component';
import { LoginemilpasswordComponent } from './loginleft/loginemilpassword/loginemilpassword.component';
import { LoginpinComponent } from './loginleft/loginpin/loginpin.component';

@NgModule({
  declarations: [LoginComponent, CarouselConfigComponent, LoginleftComponent, LoginemilpasswordComponent, LoginpinComponent],
  imports: [
    CommonModule,
    NgbModule,
    FormsModule
  ],
  exports :[
    LoginComponent
  ]
})
export class LoginModule { }
