import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import {FormsModule} from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { HomeComponent } from './pages/home/home.component';
import {HttpClientModule} from "@angular/common/http";
import { NavbarComponent } from './components/navbar/navbar.component';
import { RightMenuComponent } from './components/right-menu/right-menu.component';
import {UserModel} from "./models/UserModel";
import { HomeContentComponent } from './components/home-content/home-content.component';
import { PostCardComponent } from './components/post-card/post-card.component';
import {QuillModule} from "ngx-quill";
import { PostWriteComponent } from './pages/post-write/post-write.component';
import { PostReadComponent } from './pages/post-read/post-read.component';
import { EditProfileComponent } from './pages/edit-profile/edit-profile.component';
import { ProfileComponent } from './pages/profile/profile.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    NavbarComponent,
    RightMenuComponent,
    HomeContentComponent,
    PostCardComponent,
    PostWriteComponent,
    PostReadComponent,
    EditProfileComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    QuillModule.forRoot()

  ],
  providers: [UserModel],
  bootstrap: [AppComponent]
})
export class AppModule { }
