import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import 'rxjs/add/operator/map';

@Injectable()
export class AuthService implements OnInit {
    ngOnInit(): void {
        this.jwt = localStorage.getItem('jwt');
    }

    jwt: string;

    constructor(private http: HttpClient) {}

    login(email, password) {
        let form_data = {
            email: email,
            password: password
        };
        return this.http.post( "https://api.thechristmascarolers.com/auth/login", form_data).map((res: Response) => {
                if(res['jwt']){
                    let jwt = res['jwt'];
                    this.jwt = jwt;
                    localStorage.setItem('jwt', jwt);
                }
            });
    }

    logout(){
        this.jwt = null;
        localStorage.removeItem('jwt');
    }

    getJWT(){
        return this.jwt;
    }

}
