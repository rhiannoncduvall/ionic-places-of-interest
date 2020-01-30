import { Injectable } from '@angular/core';
// import { HTTP } from '@ionic-native/http/ngx';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Platform } from '@ionic/angular';
// import { Storage } from '@ionic/storage';


export interface LoginForm {
  username: string;
  password: string;
}

export interface RegisterForm {
  username: string;
  password: string;
  firstName: string;
  lastName: string;
  email: string;
}

export interface LoginResponse {
  email: string,
  firstName: string,
  lastName: string,
  username: string,
  id: string,
  token: string,
  userId: string,
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    public http: HttpClient,
    private platform: Platform,
    // private storage: Storage,
  ) {
    this.platformCheck();
   }

   ngOnInit() {

   }

 // add timestamp to the token and check that

 // if desktop, check for token on sessionStorage
 // if other, check on localStorage

 // if token is present:
 // user onGetUserInfo to get user details
 // log in user?

 // if token is not present:
 // isLoggedIn = false

 // make request to refresh token


 user: any = {
   email: '',
   firstName: '',
   lastName: '',
   username: '',
   id: '',
 };

 desktop: boolean;
 
 baseUrl: string = "http://192.168.1.48:3000/api/appUsers/";

 isLoggedIn: boolean = false;

 platformCheck() {
  if(this.platform.is('desktop')) {
    this.desktop = true;
  }
  else {
    this.desktop = false;
  }
  console.log("desktop: ", this.desktop)
 }

 login(credentials: LoginForm) {
  return this.http.post(`${this.baseUrl}login`, credentials)
 }

 getLoginDetails(credentials: LoginForm) {
   this.login(credentials)
    .subscribe((res: LoginResponse) => {
      if (this.desktop) {
        sessionStorage.setItem('token', res.id);
        sessionStorage.setItem('userId', res.userId);
        this.onGetUserInfo(sessionStorage.getItem('userId'), sessionStorage.getItem('token'))
      } else {
        localStorage.setItem('token', res.id);
        localStorage.setItem('userId', res.userId);
        this.onGetUserInfo(localStorage.getItem('userId'), localStorage.getItem('token'))
      }
    })
 }

 onGetUserInfo(userId: string, token: string) {
  this.getUserInfo(userId, token)
  .subscribe((res: LoginResponse) => {
    this.user.firstName = res.firstName;
    this.user.lastName = res.lastName;
    this.user.username = res.username;
    this.user.email = res.email;
    this.isLoggedIn = true;
    })
 }

//  onPostNewUser(credentials: RegisterForm) {
//    this.postNewUser(credentials)
//     .subscribe(_ => _)
//  }

 getUserInfo(userId: string, token: string) {
    return this.http.get(`${this.baseUrl}${userId}?access_token=${token}`)
 }

 postLogout(token: string) {
  return this.http.post(`${this.baseUrl}logout?access_token=${token}`, {});
}

 postNewUser(credentials: RegisterForm) {
   return this.http.post(`${this.baseUrl}`, credentials)
 }

 logout() {
  let token: string;
  if (this.desktop) {
    token = sessionStorage.getItem('token');
   } else {
     token = localStorage.getItem('token');
   }
  this.postLogout(token).subscribe((_) => {
    this.user = {
      email: null,
      firstName: null,
      lastName: null,
      username: null,
      id: null,
    }
    sessionStorage.clear();
    localStorage.clear();
    this.isLoggedIn = false;
  }, (error) => {console.log(error)})
 }


// get token from ionic storage
//  this.storage.get('token').then(token => console.log(token))


}
