import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private http: HttpClient) { }

  getUsers() {
    //return this.http.get('https://reqres.in/api/users')
    //return this.http.get('https://localhost:4001/api/user')
  }
}