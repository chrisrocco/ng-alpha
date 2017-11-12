import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthService implements OnInit {

    jwt: string;

    constructor(private http: HttpClient) {}

    ngOnInit(): void {
        this.jwt = localStorage.getItem('jwt');
    }

    login(email, password): Observable<void> {
        let form_data = {
            email: email,
            password: password
        };
        return this.http.post( "https://api.thechristmascarolers.com/auth/login", form_data).map((res: Response) => {
                let jwt = res['token'];
                this.jwt = jwt;
                localStorage.setItem('jwt', jwt);
            });
    }

    logout(){
        this.jwt = null;
        localStorage.removeItem('jwt');
    }

}
