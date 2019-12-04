import { Component, OnInit } from '@angular/core';

export interface RegisterForm {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {

  constructor() { }

  registerForm: RegisterForm = {
    username: null,
    password: null,
    email: null,
    firstName: null,
    lastName: null,
  }

  ngOnInit() {
  }

  createAccount() {
    console.log("success!")
  }

}
