import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http:HttpClient) { }

  getUser() {
    const token= localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token||""
    });

    const url = "http://3.127.53.229:60001"
    return this.http.get(url+"/user",{ headers: headers })
  }
}
