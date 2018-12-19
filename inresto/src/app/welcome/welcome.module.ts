import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DataService } from '../data.service';
import { LoggerService } from '../logger.service';
import { SharedModule } from '../shared/shared.module';
import { CommonviewsModule } from '../commonviews/commonviews.module';

import { WelcomeComponent } from './welcome/welcome.component';
import {DetailsModule} from './details/details.module';
import { JoinInrestoComponent } from './join-inresto/join-inresto.component';
import { JoinLeftnavigationComponent } from './join-inresto/join-leftnavigation/join-leftnavigation.component';
import { JoinHeadertabComponent } from './join-inresto/join-headertab/join-headertab.component';
import { CompanyProfileComponent } from './join-inresto/company-profile/company-profile.component';
import { SingleOutletComponent } from './join-inresto/company-profile/single-outlet/single-outlet.component';
import { FormsModule } from '@angular/forms';
import { MultipleOutletComponent } from './join-inresto/company-profile/multiple-outlet/multiple-outlet.component';
import { MultipleCompaniesComponent } from './join-inresto/company-profile/multiple-companies/multiple-companies.component';
import { OutletsComponent } from './join-inresto/outlets/outlets.component';
import { OutletSingleOutletComponent } from './join-inresto/outlets/outlet-single-outlet/outlet-single-outlet.component';
import { OutletAddOutletComponent } from './join-inresto/outlets/outlet-add-outlet/outlet-add-outlet.component';
import { OutletAddBrandComponent } from './join-inresto/outlets/outlet-add-brand/outlet-add-brand.component';
import { OutletAddCompanyComponent } from './join-inresto/outlets/outlet-add-company/outlet-add-company.component';
import { RouterModule } from '@angular/router';
import { AdminSettingsComponent } from './admin-settings/admin-settings.component';

@NgModule({
  declarations: [WelcomeComponent, JoinInrestoComponent, JoinLeftnavigationComponent, JoinHeadertabComponent, CompanyProfileComponent, SingleOutletComponent, MultipleOutletComponent, MultipleCompaniesComponent, OutletsComponent, OutletSingleOutletComponent, OutletAddOutletComponent, OutletAddBrandComponent, OutletAddCompanyComponent, AdminSettingsComponent],
  imports: [
    CommonModule,
    SharedModule,
    CommonviewsModule,
    DetailsModule,
    FormsModule,
    RouterModule,
  ],exports:[
    WelcomeComponent,
    JoinInrestoComponent,
  ]
})
export class WelcomeModule { }
