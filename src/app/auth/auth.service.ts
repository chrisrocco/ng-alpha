import {Injectable, OnInit} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';
import {Observable} from "rxjs/Observable";

import {environment} from "../../environments/environment";

import jsonwebtoken from "jsonwebtoken";
import {User} from "../models/User";
import {Router} from "@angular/router";

declare let swal: any;

@Injectable()
export class AuthService implements OnInit {

    jwt: string;
    user: User;

    constructor(private http: HttpClient, private router: Router) {
        this.loadAuthData();
    }

    ngOnInit(): void {}

    login(email, password): Promise<void> {
        let form_data = {
            email: email,
            password: password
        };


        // login
        // get profile data
        return new Promise( (resolve, reject) => {
            this.http.post( environment.api + "/auth/login", form_data)
                .toPromise()
                .then(
                    (res: Response) => {
                        let jwt = res['token'];
                        localStorage.setItem('jwt', jwt);

                        this.http.get( environment.api + "/users/profile").subscribe((user: User) => {
                            localStorage.setItem("userProfile", JSON.stringify(user));
                            this.loadAuthData();
                            resolve()
                        }, reject );

                    }, reject
                );
        });
    }

    logout(){
        this.jwt = null;
        localStorage.removeItem('jwt');
    }

    loadAuthData(){
        this.jwt = localStorage.getItem('jwt');
        this.user = JSON.parse(localStorage.getItem('userProfile'));

        if(this.jwt){
            let decoded = jsonwebtoken.decode(this.jwt);
            let user = decoded.user;
            console.log(decoded);

            if (decoded.exp < (new Date().getTime() / 1000)) {
                swal("Session expired. Please login again");
                this.logout();
                this.router.navigateByUrl('/login');
            }
        }
    }
}