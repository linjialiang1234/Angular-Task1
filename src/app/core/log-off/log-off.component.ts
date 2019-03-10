import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

import { User } from '../../models/user';
import { AppState, selectAuthenticationState } from '../../store/app.states';
import { Logout } from '../../store/actions/authentication.actions';
@Component({
  selector: 'app-log-off',
  templateUrl: './log-off.component.html',
  styleUrls: ['./log-off.component.css']
})
export class LogOffComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService,
              private router: Router,
              private store: Store<AppState>) { }

  ngOnInit() {
  }

  logOff() {
  	// let logoutResult;
  	// logoutResult = this.authorizationService.logout();

  	// if (logoutResult === true) {
  	// 	console.log('logout successfully');
   //    	this.router.navigate(['/login']);
  	// } else {
  	// 	console.log('logout unsuccessfully');
  	// }

    this.store.dispatch(new Logout);
  }

}
