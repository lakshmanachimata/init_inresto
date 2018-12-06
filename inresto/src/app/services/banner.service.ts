import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BannerService {

  uri = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getBanners() {
    return this.http.get(`${this.uri}/banners`);
  }
  getBannerById(id) {
    return this.http.get(`${this.uri}/banners/${id}`);
  }
  
}
