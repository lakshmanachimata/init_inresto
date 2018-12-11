import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  uri = 'http://localhost:3001/web';

  constructor(private http: HttpClient) { }

  postLogin(username,password) {
    return this.http.post(`${this.uri}/login`,{username,password});
  }
}
