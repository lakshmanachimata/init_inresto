import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-availabilerestaurents',
  templateUrl: './availabilerestaurents.component.html',
  styleUrls: ['./availabilerestaurents.component.scss']
})
export class AvailabilerestaurentsComponent implements OnInit {

  customOptions: any = {
    loop: false,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    dots: false,
    nav: true,
    navSpeed: 1000,
    navText: ['', ''],
    autoWidth:true,
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 1
      },
      740: {
        items: 1
      },
      940: {
        items: 2
      },
      1024: {
        items: 2
      }
    },
    
  }

  ngOnInit() {
  }

}
