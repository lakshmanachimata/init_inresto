import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { Banner } from '../../../models/banner.model';
import { BannerService } from '../../../services/banner.service';

@Component({
  selector: 'app-carousel-config',
  templateUrl: './carousel-config.component.html',
  styleUrls: ['./carousel-config.component.scss'],
  providers: [NgbCarouselConfig]  // add NgbCarouselConfig to the component providers
})
export class CarouselConfigComponent implements OnInit {

  banners: Banner[];

  constructor(private bannerService:BannerService,config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.wrap = true;
    config.keyboard = false;
    config.pauseOnHover = false;
    config.showNavigationArrows = false;
    this.fetchBanners();
   }

  ngOnInit() {
  }

  fetchBanners(){
    this.bannerService
    .getBanners()
    .subscribe((data: Banner[]) => {
      this.banners = data;
      console.log(this.banners);
    });
  }
}
