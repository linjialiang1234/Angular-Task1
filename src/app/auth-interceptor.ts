import { Injectable } from '@angular/core';
import {
	HttpEvent, HttpInterceptor, HttpHandler, HttpRequest
} from '@angular/common/http';

import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
	intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
		let tokenValue = localStorage.getItem('loginSuccessUser');
		const authReq = req.clone({
			setHeaders: {
				Authorization: `${tokenValue}`
			}
		});
		return next.handle(authReq);
	}
}