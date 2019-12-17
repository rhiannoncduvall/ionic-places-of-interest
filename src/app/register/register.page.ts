import { Component, OnInit } from '@angular/core';
import { RegisterForm } from '../user.service'

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
