import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './user.service';
import { UserModel } from '../models/UserModel';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  url: string = 'http://3.127.53.229:60003';
  _isAuthenticated: boolean = false;
  constructor(
    private http: HttpClient,
    private userService: UserService,
    private userModel: UserModel
  ) {
    this.checkAuthenticated();
  }

  login(email: string, password: string) {
    return this.http
      .post(this.url + '/auth/login', { email, password })
      .toPromise()
      .then((data: any) => {
        localStorage.setItem('token', data.Authorization);
        return this.userService.getUser().toPromise();
      })
      .then((data: any) => {
        this.userModel.setUser(data.user);
      })
      .catch((err) => {
        localStorage.removeItem('token');
        this.userModel.setUser(null);
      });
  }
  signUp(name: string, surname: string, email: string, password: string) {
    return this.http.post(this.url + '/auth/register', {
      name,
      surname,
      email,
      password,
    });
  }
  checkAuthenticated() {
    return this.userService
      .getUser()
      .toPromise()
      .then((data: any) => {
        this.userModel.setUser(data.user);
      })
      .catch((err) => {
        localStorage.removeItem('token');
        this.userModel.setUser(null);
      });
  }

  isAuthenticated() {
    if (localStorage.getItem('token') != null) {
      this._isAuthenticated = true;
    }
    return this._isAuthenticated;
  }
  logout() {
    localStorage.removeItem('token');
    this._isAuthenticated = false;
    this.userModel.setUser(null);
  }
}
