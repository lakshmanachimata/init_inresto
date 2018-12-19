import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { JoinInrestoComponent } from './welcome/join-inresto/join-inresto.component';
import { LoginComponent } from './shared/login/login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: 'welcome', component: WelcomeComponent },
  { path: 'account-settings/company', component: JoinInrestoComponent},
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
