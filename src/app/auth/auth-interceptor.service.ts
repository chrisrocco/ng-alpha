import {Injectable} from '@angular/core';
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";
import {UserService} from "./user.service";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    constructor( private userService: UserService ) {}

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if(this.userService.isLoggedIn()){
            let jwt = this.userService.jwt;
            let authenticatedRequest = req.clone({ headers: req.headers.set("Authorization", "Bearer " + jwt)});
            return next.handle(authenticatedRequest);
        }
        return next.handle(req);
    }

}
