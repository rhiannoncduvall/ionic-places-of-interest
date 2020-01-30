import { Component, OnInit } from '@angular/core';
import { RegisterForm } from '../user.service';
import { UserService } from '../user.service';
import { LoginForm } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor(
    public userService: UserService
  ) { }

  registerForm: RegisterForm = {
    username: null,
    password: null,
    email: null,
    firstName: null,
    lastName: null,
  }

  loginForm: LoginForm = {
    username: null,
    password: null,
  }

  ngOnInit() {
  }

  createAccount() {
    this.userService.postNewUser(this.registerForm)
    .subscribe(_ => {
      this.loginForm = {
        username: this.registerForm.username,
        password: this.registerForm.password,
      }
      this.userService.getLoginDetails(this.loginForm);
    })
  }

  onLogout() {
    this.userService.logout();
    this.clearLoginForm()
  }

  clearLoginForm() {
    this.loginForm = {
      username: null,
      password: null,
    }
    this.registerForm = {
      username: null,
      password: null,
      email: null,
      firstName: null,
      lastName: null,
    }
  }

}
