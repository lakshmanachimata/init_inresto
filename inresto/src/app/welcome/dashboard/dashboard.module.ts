import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonviewsModule } from '../../commonviews/commonviews.module';

@NgModule({
  imports: [
    CommonModule,
    CommonviewsModule
  ],
  exports : [
  ]
})
export class DashboardModule { }
