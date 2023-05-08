import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  url:string = "http://3.127.53.229:60003"

  constructor(private http:HttpClient) { }

  getSearchValue(search:string) {
    return this.http.get(this.url+"/blog/search?search="+search+"&start=0&limit=10")
  }

}
