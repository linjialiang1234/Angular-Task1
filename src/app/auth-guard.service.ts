import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthorizationService } from './authorization.service';
import { Observable } from 'rxjs/Observable';
import { catchError, map} from 'rxjs/operators';
import { of } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(public auth: AuthorizationService, public router: Router) { }

   canActivate(next:ActivatedRouteSnapshot, state:RouterStateSnapshot): Observable<boolean> {
        if (!this.auth.isAuthenticated()) {
        	this.router.navigate(['login']);
        	return of(false);
      	}

      	else {
      		
      		return of(true);
      	}
    }   
}
