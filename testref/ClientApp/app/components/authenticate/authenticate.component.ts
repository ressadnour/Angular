import { AuthenticateService } from './authenticate.service';
import { Http } from '@angular/http';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
    selector: 'app-authenticate',
    templateUrl: './authenticate.component.html'
})
export class AuthenticateComponent {

    constructor(private loginService: AuthenticateService) {}
    ngOnInit() { }



    onAuthenticate(form: NgForm) {
          const email = form.value.email;
          const password = form.value.password;
          this.loginService.authentication(email, password);
        }

        

        //  authentication(username: any, password: any): any {
        //          this.dataService.authentication(username, password);}
        
        
        }
        