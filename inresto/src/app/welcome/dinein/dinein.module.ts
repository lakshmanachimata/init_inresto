import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CommonviewsModule} from '../../commonviews/commonviews.module';
import { ReactiveFormsModule } from '@angular/forms';
import { DineindashboardComponent } from './dineindashboard/dineindashboard.component';
import { DineinreservwalkinComponent } from './dineinreservwalkin/dineinreservwalkin.component';
import { AddreservationpopupComponent} from './addreservationpopup/addreservationpopup.component'
import {AddwalkinpopupComponent} from './addwalkinpopup/addwalkinpopup.component'
import {CheckavailabilitypopupComponent} from './checkavailabilitypopup/checkavailabilitypopup.component';
import { DineinfiltersComponent } from './dineinfilters/dineinfilters.component';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { FormsModule } from '@angular/forms';
import { OwlModule} from 'ngx-owl-carousel';
import { AvailabilerestaurentsComponent } from './checkavailabilitypopup/availabilerestaurents/availabilerestaurents.component';
import { CheckavailabilitytablesComponent } from './checkavailabilitypopup/checkavailabilitytables/checkavailabilitytables.component'
import {ReservetableComponent} from './reservetable/reservetable.component';
import { ReservetablepopupComponent } from './reservetablepopup/reservetablepopup.component';

@NgModule({
  declarations: [DineindashboardComponent, DineinreservwalkinComponent, AddreservationpopupComponent, AddwalkinpopupComponent, CheckavailabilitypopupComponent, DineinfiltersComponent, AvailabilerestaurentsComponent, ReservetableComponent, ReservetablepopupComponent,CheckavailabilitytablesComponent],
  imports: [
    CommonModule,
    CommonviewsModule,
    ReactiveFormsModule,
    FormsModule,
    OwlModule,
    BsDatepickerModule.forRoot()
  ],exports:[
    DineindashboardComponent, DineinreservwalkinComponent, AddreservationpopupComponent, AddwalkinpopupComponent, CheckavailabilitypopupComponent, DineinfiltersComponent, AvailabilerestaurentsComponent, ReservetableComponent, ReservetablepopupComponent
  ]
})
export class DineinModule { }
