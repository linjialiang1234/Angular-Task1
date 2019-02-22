import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const BASE_URL = 'http://localhost:3004/users';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {

  public userIdentity = [{
    id: 1,
    firstName: 'Leo',
    lastName: 'Lam'
  },
  {
    id: 2,
    firstName: 'Jack',
    lastName: 'Wang'
  },
  {
    id: 3,
    firstName: 'Tom',
    lastName: 'Ma'
  }];

  public usersInformation;

  // {
  //   "id": 6093,
  //   "fakeToken": "58ebfdf7f1f558c5c86e17f6",
  //   "name": {
  //     "first": "Ines",
  //     "last": "Lowe"
  //   },
  //   "login": "Warner",
  //   "password": "ea"
  // }
  // = [{
  //   id: 1,
  //   email: '1111@epam.com',
  //   password: '123456',
  //   isLogin: false
  // },
  // {
  //   id: 2,
  //   email: '2222@epam.com',
  //   password: '123456',
  //   isLogin: false
  // },
  // {
  //   id: 3,
  //   email: '3333@epam.com',
  //   password: '123456',
  //   isLogin: false
  // }];

  constructor(private http: HttpClient) { }

  logout() {
  	let logoutSuccess = false;
  	// this.usersInformation.forEach((user, index) => {
    if (localStorage.getItem('loginSuccessUser')!== "null") {
      localStorage.setItem('loginSuccessUser', null);
        // localStorage.setItem('password', null);
  		logoutSuccess = true;
        // user.isLogin = false;
    }
    // });

  	return logoutSuccess;
  }

  isAuthenticated() {
  	let isAuthenticated = true;
  	if (localStorage.getItem('loginSuccessUser') === "null") {
  		isAuthenticated = false;
  	}

  	return isAuthenticated;
  }

  getUserInfo() {
    let userInfo;
    this.usersInformation.forEach((user, index) => {
      if (user.fakeToken === localStorage.getItem('loginSuccessUser')) {
        userInfo = user;
      }
    });

    return userInfo;
  }

  getUsers() {
    var result;
    result = this.http.get(`${BASE_URL}`);
    console.log(result);
    return result;
  }

  updateUsersInformation(userInformations) {
    this.usersInformation = userInformations;
  }
}
