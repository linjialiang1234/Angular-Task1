import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-off',
  templateUrl: './log-off.component.html',
  styleUrls: ['./log-off.component.css']
})
export class LogOffComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService,
              private router: Router) { }

  ngOnInit() {
  }

  logOff() {
  	const userInformation = {
  		email: localStorage.getItem('email'),
  		password: localStorage.getItem('password')
  	};

  	let logoutResult;
    let userInfo;
  	logoutResult = this.authorizationService.logout(userInformation);

  	if (logoutResult === true) {
  		console.log('logout successfully');
      	this.router.navigate(['/login']);
  	} else {
  		console.log('logout unsuccessfully');
  	}
  }

}
