import { Component, OnInit } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private authorizationService: AuthorizationService) { }

  ngOnInit() {

  }

  login(userInformation) {
  	this.authorizationService.login(userInformation);
  }

  logout(userInformation) {
  	this.authorizationService.logout(userInformation);
  }

  isAuthenticated() {
  	this.authorizationService.isAuthenticated();
  }

}
