import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class BlogService {
  url:string = "http://3.127.53.229:60003"



  constructor(private http:HttpClient) { }

  getAllPosts() {
    return this.http.get(this.url+"/blog")
  }
  getIndexPosts(start:number,limit:number) {
    const params = "?start="+start+"&limit="+limit
    return this.http.get(this.url+"/blog/"+params)
  }
  getPost(id:any) {
    return this.http.get(this.url+"/blog/"+id)
  }

  setPost(title:string,content:string,description:string,category:any) {
    const token= localStorage.getItem('token');
    const headers = new HttpHeaders({
      'Authorization': token||""
    });

    return this.http.post(
      this.url + "/blog",
      {title, content,description, category},{ headers: headers }
    )
  }

  getUserPost(userId:any) {
    return this.http.get(this.url+"/blog/author/"+userId)
  }
}
