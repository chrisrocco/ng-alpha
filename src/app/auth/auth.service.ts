import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import 'rxjs/add/operator/map';

import {environment} from "../../environments/environment";

import {User} from "../models/User";
import {Router} from "@angular/router";
import {UserService} from "./user.service";

@Injectable()
export class AuthService {

    constructor(
        private http: HttpClient,
        private router: Router,
        private userService: UserService
    ) { }

    login(loginRequest: { email: string, password: string }): Promise<void> {
        return new Promise((resolve, reject) => {
            this.http.post(environment.api + "/auth/login", loginRequest)
                .toPromise()
                .then((jwt_response: Response) => {

                    console.log(jwt_response);

                    let jwt = jwt_response['token'];

                    const opts = {
                        headers: new HttpHeaders().set('Authorization', `Bearer ${jwt}`)
                    };

                    // profile data request
                    this.http.get(environment.api + "/users/profile", opts).subscribe((user_response: User) => {
                        this.userService.setSession(jwt, user_response);
                        resolve()
                    }, reject);
                }, reject);
        });
    }

    logout() {
        this.userService.clearSession();
        this.router.navigateByUrl('/login');
    }

}