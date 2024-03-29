import { Component } from '@angular/core';
import { UserService } from '../../services/user.service';
import { UserModel } from '../../models/UserModel';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  seachData: any;

  constructor(private userService: UserService, private userModel: UserModel) {}

  ngOnInit(): void {
    console.log(this.userModel.getUser());
  }
  addItem(newPostItem: string) {
    this.seachData = newPostItem;
    console.log(newPostItem);
  }
}
