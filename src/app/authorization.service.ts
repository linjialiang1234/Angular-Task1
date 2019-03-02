import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpErrorResponse, HttpParams } from '@angular/common/http';
import { Observable, Subject, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { HttpHeaders } from '@angular/common/http';

const BASE_URL = 'http://localhost:3004/users';

@Injectable({
  providedIn: 'root'
})
export class AuthorizationService {
  private loginUserInfo = new Subject<any>();

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

  constructor(private http: HttpClient) { }

  logout() {
  	let logoutSuccess = false;
    if (localStorage.getItem('loginSuccessUser')!== "null") {
      localStorage.setItem('loginSuccessUser', null);
  		logoutSuccess = true;
    }
  
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
    let fakeToken = localStorage.getItem('loginSuccessUser');

    userInfo = this.http.get(`${BASE_URL}`, {
      params: {
        fakeToken
      }
    });

    return userInfo;
  }

  setLoginUserInfo() {
    let result;
    this.getUserInfo().subscribe( data => {
      result = data;
      this.loginUserInfo.next(result);
    })
  }

  getLoginUserInfo(): Observable<any> {
    return this.loginUserInfo.asObservable();
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
