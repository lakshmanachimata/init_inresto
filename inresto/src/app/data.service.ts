import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient,HttpResponse,HttpHeaders,HttpParams,HttpRequest } from '@angular/common/http';
import { LoggerService } from './logger.service';
import { RouterModule, Routes, Router, RouterStateSnapshot, ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { Observable } from 'rxjs';
import { Account } from './models/account.model'
import { CompanyGroup } from './models/companyGroup.model'

// export class PageType {
//   static LOGIN_PAGE = 0;
//   static JOIN_PAGE = 1;
//   static WELCOME_PAGE = 2;
// }




@Injectable({
  providedIn: 'root'
})
export class DataService {
  uri = 'http://localhost:3001/web';
  static dataService: DataService;
  userAccount:Account;
  superAdmin:false;
  companyGroup:CompanyGroup;
  companyCount:0;
  // pageType = PageType.LOGIN_PAGE;
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
     //console.log(this.userLoggedIn);
     return this.userLoggedIn;
   }

   public setIsUserLoggedIn(loggedIn, userObj){
    this.userLoggedIn = loggedIn;
    this.userAccount = userObj;
   }
   public setLeftMenuIndex(index){
     this.menuIndex = index;
   }
   public getLeftMenuIndex(){
     return this.menuIndex;
   }

  //  public setPageType(pagetype){
  //    this.pageType = pagetype;
  //  }
  //  public getPageType(){
  //   return this.pageType;
  //  }

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
  postLogin(username,password) {
    return this.http.post(`${this.uri}/login`,{username,password});
  }
  getBanners(){
    return this.http.get(`${this.uri}/banners`);
  }
  public setUserInfo(loggedIn, userObj, companyGrp,companyCnt, superAdmin){
    this.userLoggedIn = loggedIn;
    this.userAccount = userObj;
    this.companyGroup = companyGrp;
    this.companyCount = companyCnt;
    this.superAdmin = superAdmin;
   }
}
