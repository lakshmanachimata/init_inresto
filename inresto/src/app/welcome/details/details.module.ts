import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DetailsComponent } from './details.component';
import { DashboardModule } from '../dashboard/dashboard.module';
import { InventoryModule } from '../inventory/inventory.module';
import { SalesModule } from '../sales/sales.module';
import {DineinModule} from '../dinein/dinein.module'
@NgModule({
  declarations: [DetailsComponent],
  imports: [
    CommonModule,
    DashboardModule,
    InventoryModule,
    SalesModule,
    DineinModule
  ],exports:[
    DetailsComponent,
  ]
})
export class DetailsModule { }
