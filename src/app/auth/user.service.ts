import {Injectable} from '@angular/core';
import {User} from "../models/User";

import jsonwebtoken from "jsonwebtoken";

@Injectable()
export class UserService {

    private static USER_LOCATION = "user";
    private static JWT_LOCATION = "jwt";

    jwt: string;
    jwt_decoded: any;
    _user: User;

    constructor() {
        this.loadSessionData();
    }

    get user(){
        if(!this._user)
            throw "Tried to access user data while not logged in";
        return this._user;
    }

    private loadSessionData(){
        let jwt = localStorage.getItem( UserService.JWT_LOCATION );
        let user_json = localStorage.getItem( UserService.USER_LOCATION );

        if(jwt && user_json){
            this.jwt = jwt;
            this.jwt_decoded = jsonwebtoken.decode(jwt);
            this._user = JSON.parse(user_json);
        }
    }

    public setSession(jwt: string, user: User){
        if(!jwt || !user) return;
        localStorage.setItem(UserService.JWT_LOCATION, jwt);
        localStorage.setItem(UserService.USER_LOCATION, JSON.stringify(user));
        this.loadSessionData();
    }

    public clearSession(){
        localStorage.removeItem(UserService.JWT_LOCATION);
        localStorage.removeItem(UserService.USER_LOCATION);
        this.loadSessionData();
    }

    public isLoggedIn(){
        if(!this.user || !this.jwt)
            return false;
        if(this.jwt_decoded.exp < (new Date().getTime() / 1000))
            return false;
        return true;
    }

}