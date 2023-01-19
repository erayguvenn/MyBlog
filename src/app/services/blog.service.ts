import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  private url: any

  constructor(private http:HttpClient) { }

  getAllPosts() {
    const url = "http://3.127.53.229:60001"
    return this.http.get(url+"/blog")
  }
  getIndexPosts(start:number,limit:number) {
    const url = "http://3.127.53.229:60001"
    return this.http.get(url+"/blog/"+start+"/"+limit)
  }
  getPost(id:any) {
    const url = "http://3.127.53.229:60001"
    return this.http.get(url+"/blog/"+id)
  }

  setPost(title:string,content:string,description:string,category:any) {
    const token= localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token||""
    });

    this.url = "http://3.127.53.229:60001"
    return this.http.post(
      this.url + "/blog",
      {title, content,description, category},{ headers: headers }
    )
  }
}
