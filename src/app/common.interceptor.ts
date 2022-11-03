import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable()
export class CommonInterceptor implements HttpInterceptor {

  constructor() {}

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    const commonUrl="https://rickandmortyapi.com/api/character";
    // const commonUrl="https://v2-dev-api.isorobot.io/api/v1/organization-policies";
    const API_KEY ="";
    // const lang=localStorage.getItem('lang') ||'en';
    // console.log(lang);
    
  
request=request.clone({setHeaders:{},url:commonUrl+request.url});

    return next.handle(request);
  }
}
