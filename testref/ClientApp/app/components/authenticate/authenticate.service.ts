import { Injectable, Inject } from '@angular/core';
import { Http, HttpModule, RequestOptions, Response, Headers } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class AuthenticateService {
    baseUrl: string;
  constructor(private http: Http , @Inject('BASE_URL') baseUrl: string) {
    this.http = http;
    this.baseUrl = baseUrl;
  }

  authentication(username: string, password: string): any {
    var model = { Username: username, Password: password };
    console.debug(this.baseUrl + "api/Authentication/Authenticate");
    console.debug(model);
    this.http.post(this.baseUrl +"api/Authentication/Authenticate", model).map(res => res.toString()).subscribe(
      success => {
        window.location.href = "/LoggedIn/index";
      });

  }
}