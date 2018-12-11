import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from "@angular/forms";
import { LoginComponent } from './login/login.component';
import { CarouselConfigComponent } from './carousel-config/carousel-config.component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { LoginleftComponent } from './loginleft/loginleft.component';

@NgModule({
  declarations: [LoginComponent, CarouselConfigComponent, LoginleftComponent],
  imports: [
    CommonModule,
    NgbModule,FormsModule
  ],
  exports :[
    LoginComponent
  ]
})
export class LoginModule { }
