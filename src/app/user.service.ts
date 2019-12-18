import { Injectable } from '@angular/core';
import { HTTP } from '@ionic-native/http/ngx';


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
  userId: string
}

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(
    private http: HTTP
  ) { }


  
getUserLogin(credentials) {
  this.http.post('http://192.168.35.115:3000/appUsers/login', credentials, {})
.then(data => { 
  console.log(data)
  console.log(data.status);
  console.log(data.data); // data received by server
  console.log(data.headers);

})
.catch(error => {
  console.log(error);
  console.log(error.error); // error message as string
  console.log(error.headers);

});
}

}
