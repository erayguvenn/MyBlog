import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http:HttpClient) { }

  getSearchValue(search:string) {
    const url = "http://3.127.53.229:60001"
    return this.http.get(url+"/blog/search?search="+search+"&start=0&limit=10")
  }

}
