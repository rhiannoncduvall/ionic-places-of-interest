import { Component, OnInit } from '@angular/core';

export interface LoginForm {
  username: string;
  password: string;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor() { }

  loginForm: LoginForm = {
    username: null,
    password: null,
  }

  ngOnInit() {
  }

  userLogin() {
    console.log("success!")
  }

}
