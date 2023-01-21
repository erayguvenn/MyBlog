import {Component} from '@angular/core';
import {UserModel} from "../../models/UserModel";
import {BlogService} from "../../services/blog.service";
import {UserService} from "../../services/user.service";
import { Router} from "@angular/router";

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  postList: any;
  user: any
  userId: any;
  userName: string = ""

  constructor(private userModel: UserModel,
              private blogService: BlogService,
              private userService: UserService,
              private router:Router) {
  }

  ngOnInit(): void {
    this.getUser()
  }

  getUser() {
    this.userService.getUser().subscribe((data: any) => {
      this.user = data.user
      console.log(this.user)
      const id = window.location.pathname.split("/")[2]
      if (id==undefined){
      this.userId = this.user.id
      }else{
        this.userId = id
      }
      console.log(id)
      this.getPosts()
    })
  }

  getUserName() {
    let userName:any
    if (this.user) {
     userName = this.user.name + " " + this.user.surname
      userName = userName.toUpperCase()
    }
    return userName
  }

  getPosts() {
    this.blogService.getUserPost(this.userId).subscribe((data: any) => {
      this.postList = data.blogs
      const id = window.location.pathname.split("/")[2]
      if (id==undefined){
        this.userName = this.getUserName()
      }else{
        this.userName = this.postList[0].author.name + " " + this.postList[0].author.surname
        this.userName = this.userName.toUpperCase()
      }
      console.log(this.postList)
    })
  }

  editProfile() {
    this.router.navigate(['/editProfile'])
  }
}
