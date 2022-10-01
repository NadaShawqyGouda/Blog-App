import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserServicesService } from './user-services.service';

@Injectable()
export class InterceptorInterceptor implements HttpInterceptor {

  constructor(private _userService:UserServicesService) {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    let theToken = request.clone({
      setHeaders:{
        Authorization: `Bearer ${this._userService.fetchToken()}`
      }
    })
    return next.handle(theToken);
  }
}
