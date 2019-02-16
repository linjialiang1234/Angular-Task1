import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(private authorizationService: AuthorizationService,
              private router: Router) { }

  ngOnInit() {
  }

  login() {
  	const userInformation = {
  		email: this.email,
  		password: this.password
  	};

  	let loginResult;
    let userInfo;
  	loginResult = this.authorizationService.login(userInformation);

  	if (loginResult === true) {
  		console.log('logged in successfully');
      userInfo = this.authorizationService.getUserInfo();
      this.router.navigate(['/courses']);
  	} else {
  		console.log('logged in unsuccessfully');
  	}
  }

}
