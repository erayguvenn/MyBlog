import {Component, EventEmitter, Output} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {SearchService} from "../../services/search.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  @Output() newItemEvent = new EventEmitter<string>();
  isAuthenticated:boolean=false;
  search: any
  result:any
  constructor(private router: Router,
              private authService:AuthService,
              private searchService:SearchService) {}

  ngOnInit(): void {

  this.isAuthenticated = this.authService.isAuthenticated();

  }
  loginButton() {
    this.router.navigate(['/login']);
  }

  logout() {
    this.authService.logout()
    this.router.navigate(['/home']);
  }

  write() {
    this.router.navigate(['/write']);
  }
  getSearchValue() {
    this.searchService.getSearchValue(this.search).subscribe((data:any)=>{
      console.log(data)
      this.result = data
      this.newItemEvent.emit(this.result);

    })
  }

}
