import { Injectable } from "@angular/core";
@Injectable()
export class UserModel {
  private _user:any;

  setUser(user:any){
    this._user = user;
  }

  getUser(){
    return this._user;
  }

}
