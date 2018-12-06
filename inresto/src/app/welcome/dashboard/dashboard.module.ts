import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { CommonviewsModule } from '../../commonviews/commonviews.module';
import { AddreservationpopupComponent } from './addreservationpopup/addreservationpopup.component';
import { CheckavailabilitypopupComponent } from './checkavailabilitypopup/checkavailabilitypopup.component';
import { AddwalkinpopupComponent } from './addwalkinpopup/addwalkinpopup.component';

@NgModule({
  declarations: [DashboardComponent, AddreservationpopupComponent, CheckavailabilitypopupComponent, AddwalkinpopupComponent],
  imports: [
    CommonModule,
    CommonviewsModule
  ],
  exports : [
    DashboardComponent,
  ]
})
export class DashboardModule { }
