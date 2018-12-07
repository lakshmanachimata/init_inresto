import { Component, OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { RouterModule, Routes, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { DataService } from '../../../data.service';
import { LoggerService } from '../../../logger.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-dineindashboard',
  templateUrl: './dineindashboard.component.html',
  styleUrls: ['./dineindashboard.component.scss']
})
export class DineindashboardComponent implements OnInit, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  respData : [];
  showAddRsrv = false;
  showAvailability = false;

  constructor(public logger: LoggerService, private router: Router, public data: DataService, private location: Location) {
  }

  ngOnInit() {
    this.data.getResponseForUrl('https://jsonplaceholder.typicode.com/users').subscribe(resp => {
      this.respData = resp.body;
    }
      
    )
  }
  onAddReservation(){
    this.showAddRsrv = true;
  }
  onCheckavailability(){
    this.showAvailability = true;
  }
  ngOnChanges() {
  }
  ngDoCheck() {
   
  }
  ngAfterContentInit() {
  }
  ngAfterContentChecked() {
  }
  ngAfterViewInit() {
  }
  ngAfterViewChecked() {
  }
  ngOnDestroy() {
  }
  onButtonClick(){
    alert("button clicked");
  }

}
