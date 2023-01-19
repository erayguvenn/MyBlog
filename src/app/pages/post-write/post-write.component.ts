import {Component} from '@angular/core';
import {UserModel} from "../../models/UserModel";
import {BlogService} from "../../services/blog.service";
import {isRegExp} from "lodash-es";
import {Router} from "@angular/router";

@Component({
  selector: 'app-post-write',
  templateUrl: './post-write.component.html',
  styleUrls: ['./post-write.component.css']
})
export class PostWriteComponent {
  content: any;
  title: any;
  description: any;


  constructor(private userModel: UserModel,
              private blogService: BlogService,
              private router: Router) {
  }

  ngOnInit() {

  }

  saveValue(title: any, content: any,description:any) {
    this.blogService.setPost(title, content,description, null).subscribe((data: any) => {
      console.log(data)
      console.log("Başarılı bir şekilde kaydedildi")
      this.router.navigate(['/home'])
    })
  }
}
