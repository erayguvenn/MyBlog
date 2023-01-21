import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./pages/login/login.component";
import {HomeComponent} from "./pages/home/home.component";
import {PostWriteComponent} from "./pages/post-write/post-write.component";
import {AuthGuard} from "./services/auth.guard";
import {PostReadComponent} from "./pages/post-read/post-read.component";
import {ProfileComponent} from "./pages/profile/profile.component";
import {EditProfileComponent} from "./pages/edit-profile/edit-profile.component";

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'post/:id', component: PostReadComponent },
  { path: 'write', component: PostWriteComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'profile/:id', component: ProfileComponent, canActivate: [AuthGuard] },
  { path: 'editProfile', component: EditProfileComponent, canActivate: [AuthGuard] },

]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
