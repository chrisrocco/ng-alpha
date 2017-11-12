import {Injectable, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable()
export class AuthService implements OnInit {
    ngOnInit(): void {
        this.jwt = localStorage.getItem('jwt');
    }

    public jwt: string;

    constructor(private http: HttpClient) {}

    login(email, password) {
        let form_data = {
            email: email,
            password: password
        };
        return this.http.post( "https://api.thechristmascarolers.com/auth/login", form_data)
            .subscribe(
                data => console.log(data),
                err => console.log(err)
            );
    }

}
