import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from '../data.service';
import { LoggerService } from '../logger.service';
import { SharedModule } from '../shared/shared.module';
import { CommonviewsModule } from '../commonviews/commonviews.module';

import { WelcomeComponent } from './welcome/welcome.component';
import {DetailsModule} from './details/details.module';
import { DineinModule } from './dinein/dinein.module'

@NgModule({
  declarations: [WelcomeComponent],
  imports: [
    CommonModule,
    SharedModule,
    CommonviewsModule,
    DetailsModule,
    DineinModule,
  ],exports:[
    WelcomeComponent,
  ]
})
export class WelcomeModule { }
