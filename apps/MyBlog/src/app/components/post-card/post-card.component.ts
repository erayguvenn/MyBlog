import { Component, Input } from '@angular/core';
import { UserModel } from '../../models/UserModel';
import { BlogService } from '../../services/blog.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-post-card',
  templateUrl: './post-card.component.html',
  styleUrls: ['./post-card.component.css'],
})
export class PostCardComponent {
  userName: string = '';
  user: any;
  allPosts: any;
  offset: number = 0;
  limit: number = 10;
  postList: any[] = [];
  isEmpthy: boolean = false;

  @Input() searchValue: any;

  constructor(
    private userModel: UserModel,
    private blogService: BlogService,
    private router: Router
  ) {}

  ngOnInit() {
    this.getPosts(this.offset, this.limit);

    // Add interseciton observer
    const options = {
      root: null,
      rootMargin: '100px',
      threshold: 1.0,
    };

    const callback = (entries: any, observer: any) => {
      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          this.offset += this.limit;
          if (!this.isEmpthy) {
            this.getPosts(this.offset, this.limit);
          }
        }
      });
    };

    const observer = new IntersectionObserver(callback, options);

    const target = document.querySelector('.pagination');
    if (target) observer.observe(target);
  }

  getUserName() {
    if (this.userModel.getUser() != null) {
      this.user = this.userModel.getUser();
      this.userName = this.user.name + ' ' + this.user.surname;
      this.userName = this.userName.toUpperCase();
    }
    return this.userName;
  }

  getPosts(offset: number, limit: number) {
    this.blogService.getIndexPosts(offset, limit).subscribe((data: any) => {
      this.postList.push(...data.blogs);
      console.log(this.postList);
      if (data.blogs.length == 0) {
        this.isEmpthy = true;
      }
    });
  }

  getUserProfile(id: number) {
    this.router.navigate(['/profile/' + id]);
  }
}
