import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';

@Component({
  selector: 'login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {
  public email: string;
  public password: string;
  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {
  }

  login() {
  	var userInformation = {
  		email: this.email,
  		password: this.password
  	}

  	var loginResult;
  	loginResult =this.authorizationService.login(userInformation);

  	if(loginResult === true) {
  		console.log("logged in successfully")
  	} else {
  		console.log("logged in unsuccessfully")
  	}
  }

}
