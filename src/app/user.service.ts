import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  login(creditentials){
    return this.http.post(environment.apiBaseUrl+'auth/login',creditentials);
  }
  register(user){
    return this.http.post(environment.apiBaseUrl+'auth/register',user);
  }
  
  setToken(token: string) {
    localStorage.setItem('token', token);
  }

  getToken() {
    return localStorage.getItem('token');
  }
  deleteToken() {
    localStorage.removeItem('token');
  }
}
