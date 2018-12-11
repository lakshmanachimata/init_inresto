import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
//import { DineindashboardComponent } from './welcome/dinein/dineindashboard/dineindashboard.component';
import { WelcomeComponent } from './welcome/welcome/welcome.component';
import { LoginComponent } from './shared/login/login/login.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

const appRoutes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'welcome', component: WelcomeComponent },
  { path: 'login', component: LoginComponent },
  { path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
