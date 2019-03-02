import { Injectable } from "@angular/core";
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Observable } from "rxjs";
import { LoadingScreenService } from "./loading-screen.service";
import { finalize } from "rxjs/operators";


@Injectable()
export class LoadingScreenInterceptor implements HttpInterceptor {

  activeRequests: number = 0;

  constructor(private loadingScreenService: LoadingScreenService) {
  }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let displayLoadingScreen = true;

    if (displayLoadingScreen) {
      if (this.activeRequests === 0) {
        this.loadingScreenService.startLoading();
      }
      this.activeRequests++;

      return next.handle(request).pipe(
        finalize(() => {
          this.activeRequests--;
          if (this.activeRequests === 0) {
            let stopLoading = setTimeout(() => {
              this.loadingScreenService.stopLoading();
            }, 3000);
          }
        })
      )
    } else {
      return next.handle(request);
    }
  };
}