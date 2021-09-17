import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubjectService {

  constructor(private http: HttpClient) { }
  login(creditentials){
    return this.http.post(environment.apiBaseUrl+'/subjects',creditentials);
  }
}
