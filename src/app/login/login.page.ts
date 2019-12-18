import { Component, OnInit } from '@angular/core';
import { LoginForm } from '../user.service';
import { UserService } from '../user.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(
    private userService: UserService,
  ) { }

  loginForm: LoginForm = {
    username: null,
    password: null,
  }

  ngOnInit() {
  }

  userLogin() {
    this.userService.getUserLogin(this.loginForm);
  }

}
