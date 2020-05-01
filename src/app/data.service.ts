import { Injectable } from '@angular/core';
// Import Httpclient
import { HttpClient } from '@angular/common/http';
//import { ThrowStmt } from '@angular/compiler';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private http: HttpClient) {}

  // firstClick() { return console.log('clicked'); }
  getUsers() {
    return this.http.get('https://reqres.in/api/users');
  }
}
