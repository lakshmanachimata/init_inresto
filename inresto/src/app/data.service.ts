import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders,HttpParams,HttpRequest } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { RouterModule, Routes, Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  static dataService: DataService;

  menuIndex = 1;
  submenuIndex = 101;
  userLoggedIn = false;
  constructor(public http: HttpClient, public logger: LoggerService) {
    DataService.dataService = this;
   }
   static getDataService(){
     return DataService.dataService;
   }

   public getIsUserLoggedIn(){
     return this.userLoggedIn;
   }

   public setIsUserLoggedIn(loggedIn){
     this.userLoggedIn = loggedIn;
   }
   public setLeftMenuIndex(index){
     this.menuIndex = index;
   }
   public getLeftMenuIndex(){
     return this.menuIndex;
   }

   public getResponseForUrl(getUrl) : Observable <HttpResponse<any>>{
     return this.http.get<any>(
       getUrl, {observe : 'response'}
     )
   }

   public setLeftSubMenuIndex(index){
    this.submenuIndex = index;
  }
  public getLeftSubMenuIndex(){
    return this.submenuIndex;
  }
   
}
