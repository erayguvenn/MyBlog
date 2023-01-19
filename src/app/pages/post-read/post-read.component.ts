import {Component, Input} from '@angular/core';
import {BlogService} from "../../services/blog.service";

@Component({
  selector: 'app-post-read',
  templateUrl: './post-read.component.html',
  styleUrls: ['./post-read.component.css']
})
export class PostReadComponent {

  data: any

  constructor(private blogService: BlogService) {
  }


  ngOnInit() {
    this.getPost()
  }

  getPost() {
    const id = window.location.pathname.split("/")[2]
    this.blogService.getPost(id).subscribe((data: any) => {
      this.data = data.blog
    })

  }
}
