import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {

  isAuthenticated:boolean=false;
  constructor(private router: Router,
              private authService:AuthService) {}

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
}
