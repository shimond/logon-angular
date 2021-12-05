import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class JwtInterceptor implements HttpInterceptor {

  constructor() { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const myToken = sessionStorage.getItem('myToken');
    if (myToken) {
      const req = request.clone({ setHeaders: { 'Authorization': `Bearer ${myToken}` } })
      return next.handle(req);
    } else {
      return next.handle(request);
    }
  }
}
