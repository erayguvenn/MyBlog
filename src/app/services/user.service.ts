import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url:string = "http://3.127.53.229:60003"

  constructor(private http:HttpClient) { }

  getUser() {
    const token= localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token||""
    });

    return this.http.get(this.url+"/user",{ headers: headers })
  }
}
