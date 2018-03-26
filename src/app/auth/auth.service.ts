import { Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable()
export class AuthService {
  private token: string;
  private user: any;

  constructor(private router: Router,
              private httpClient: HttpClient) {}

  setToken(token: string) {
    this.token = token;
  }

  setUser(user: any) {
    this.user = user;
  }

  getToken() {
    return this.token;
  }

  getUser() {
    return this.user;
  }


  signupUser(email: string, password: string) {
    return this.httpClient.post('/users', {email: email, password: password}, { observe: 'response'});
  }

  signinUser(email: string, password: string) {
    const result = true;
    return this.httpClient.post('/users/login', {email: email, password: password}, { observe: 'response'});
  }

  logout() {
    console.log('logout');
    this.httpClient.delete('/users/logout', {
            observe : 'response',
            headers : new HttpHeaders().append('x-auth', this.token)
          })
      .subscribe(
        (response) => {
          this.token = null;
          this.user = null;
        },
        (error) => {
          console.log(error);
        }
      );
  }

  getTokenFromServer() {

    console.log('getToken token before DB: ', this.token);
    this.httpClient.get('/users/me', {
            observe : 'response',
            headers : new HttpHeaders().append('x-auth', this.token)
          })
      .subscribe(
        (response) => {
          this.token = response.headers.get('x-auth');
          this.user = response.body;
          console.log('getToken : ', this.user);

        },
        (error) => {
          console.log(error);
        }
      );
      return this.token;
  }

  isAuthenticated() {
    return this.token != null;
  }

}
