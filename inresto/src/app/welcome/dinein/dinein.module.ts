import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DineindashboardComponent } from './dineindashboard/dineindashboard.component';
import { DineinreservwalkinComponent } from './dineinreservwalkin/dineinreservwalkin.component';
import { CustomertimelineComponent } from './customertimeline/customertimeline.component';

@NgModule({
  declarations: [DineindashboardComponent, DineinreservwalkinComponent, CustomertimelineComponent],
  imports: [
    CommonModule
  ],exports:[
    CustomertimelineComponent,
  ]
})
export class DineinModule { }
