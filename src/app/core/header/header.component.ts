import { Component, OnInit, OnChanges } from '@angular/core';
import { AuthorizationService } from '../../authorization.service';
import { Observable, Subject, Subscription  } from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit, OnChanges {
  private subscription: Subscription;
  public userInfo = "";
  constructor(private authorizationService: AuthorizationService) { 

  }
  ngOnInit() {
    this.authorizationService.getLoginUserInfo().subscribe(data => {
      console.log(data);
      this.userInfo = data[0].name.first;
    })
  }

  ngOnChanges() {
    console.log('OnChanges');
    this.isAuthenticated();

  }

  isAuthenticated() {
    if( this.authorizationService.isAuthenticated() === true) {

      this.authorizationService.getUserInfo().subscribe(data => {
        console.log(data);
      })
    }
  }

}
