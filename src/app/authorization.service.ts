import { Injectable } from '@angular/core';

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

  public usersInformation = [{
    id: 1,
    email: '1111@epam.com',
    password: '123456',
    isLogin: false
  },
  {
    id: 2,
    email: '2222@epam.com',
    password: '123456',
    isLogin: false
  },
  {
    id: 3,
    email: '3333@epam.com',
    password: '123456',
    isLogin: false
  }];

  constructor() { }

  login(userInformation) {
  	let loginSuccess = false;

 	  this.usersInformation.forEach((user, index) => {
      if (user.email === userInformation.email && user.password === userInformation.password) {
        localStorage.setItem('email', user.email);
        localStorage.setItem('password', user.password);
  		  loginSuccess = true;
        this.isAuthenticated();
        user.isLogin = true;
      }
    });

  	return loginSuccess;
  }

  logout(userInformation) {
  	let logoutSuccess = false;
  	this.usersInformation.forEach((user, index) => {
      if (user.email === userInformation.email) {
        localStorage.setItem('email', null);
        localStorage.setItem('password', null);
  		  logoutSuccess = true;
        user.isLogin = false;
      }
    });

  	return logoutSuccess;
  }

  isAuthenticated() {
  	let isAuthenticated = true;
  	if (localStorage.getItem('email') === null) {
  		isAuthenticated = false;
  	}

  	return isAuthenticated;
  }

  getUserInfo() {
    let userInfo;
    this.usersInformation.forEach((user, index) => {
      if (user.isLogin === true) {
        userInfo = user;
      }
    });

    return userInfo;
  }
}
