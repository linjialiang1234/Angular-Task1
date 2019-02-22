import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public login: string;
  public password: string;
  public usersInfo;

  constructor(private authorizationService: AuthorizationService,
              private router: Router) { }

  ngOnInit() {
  }

  triggerLogin() {
  	const userInformation = {
  		login: this.login,
  		password: this.password
  	};

    let userInfo;
    let loginSuccess = false;

    this.authorizationService.getUsers().subscribe((data) => {
      this.usersInfo = data;
      console.log("getUsers data: " + data);
      this.authorizationService.updateUsersInformation(data);
      this.usersInfo.forEach((user, index) => {
        if (user.login === userInformation.login && user.password === userInformation.password) {
          localStorage.setItem('loginSuccessUser', user.fakeToken);
          loginSuccess = true;
          // this.authorizationService.isAuthenticated();
        }
      });

      if(loginSuccess === true) {
        console.log('logged in successfully');
        userInfo = this.authorizationService.getUserInfo();
        this.router.navigate(['/courses']);
      } else {
        console.log('logged in unsuccessfully');
      } 
    });
  }
}
