import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:3001';

  constructor(private http: HttpClient) { }

  getLogin() {
    return this.http.get(`${this.uri}/web/login`);
  }
}
