import { Component } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {AuthService} from "../../services/auth.service";
import {UserService} from "../../services/user.service";
import {UserModel} from "../../models/UserModel";
import {identity, pickBy} from "lodash-es";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  buttonClass: string = "";
  data: any;
  name: string = ""
  surname: string = ""
  phoneNumber: string = ""
  email: string = ""
  password: string = ""
  adress:string=""
  userType:string="user";
  usertype:string=""
  adresClass:string=""
  params={}


  constructor(private router: Router,
              private activatedRoute: ActivatedRoute,
              private authService:AuthService,
              private userService:UserService,
              private userModels:UserModel) {

  }

  ngOnInit(): void {

  }


  signUpButton() {
    this.buttonClass = "right-panel-active";
  }

  signInButton() {
    this.buttonClass = "";
  }

  signUp(name:string,surname:string,email:string,password:string) {
    this.authService.signUp(name,surname,email,password).subscribe(data=> console.log("üye olundu"), err =>{
      console.log("Hatalı bilgiler")
      //console.log(err)
    })
  }
  login(email:string,password:string) {
    this.authService.login(email,password).then(x => {

      this.setRouterParams()
      console.log("Giriş yapıldı")
      console.log(x)
    }).catch(err => console.log("Hatalı bilgiler"))
  }
  setRouterParams() {
    this.router.navigate([""], {
      relativeTo: this.activatedRoute,
      queryParams: pickBy(this.params, identity)
    });
  }
}
