import {Injectable} from '@angular/core';
import {AuthService} from "./auth.service";
import {HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs/Observable";

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let jwt = localStorage.getItem('jwt');
        if(jwt) req = req.clone({ headers: req.headers.set("Authorization", "Bearer " + jwt)});
        return next.handle(req);
    }

}
