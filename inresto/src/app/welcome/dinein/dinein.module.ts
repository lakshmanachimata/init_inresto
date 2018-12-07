import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonviewsModule} from '../../commonviews/commonviews.module'
import { DineindashboardComponent } from './dineindashboard/dineindashboard.component';
import { DineinreservwalkinComponent } from './dineinreservwalkin/dineinreservwalkin.component';
import { AddreservationpopupComponent} from './addreservationpopup/addreservationpopup.component'
import {AddwalkinpopupComponent} from './addwalkinpopup/addwalkinpopup.component'
import {CheckavailabilitypopupComponent} from './checkavailabilitypopup/checkavailabilitypopup.component'
@NgModule({
  declarations: [DineindashboardComponent, DineinreservwalkinComponent, AddreservationpopupComponent, AddwalkinpopupComponent, CheckavailabilitypopupComponent],
  imports: [
    CommonModule,
    CommonviewsModule
  ],exports:[
    DineindashboardComponent, DineinreservwalkinComponent, AddreservationpopupComponent, AddwalkinpopupComponent, CheckavailabilitypopupComponent
  ]
})
export class DineinModule { }
