import {Component, OnInit, ViewEncapsulation, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {MasterComponent} from "../layout/master/master.component";
import {AuthService} from "../auth/auth.service";

declare let swal: any;

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {

    form_model = {
        email: "",
        password: ""
    };

    constructor(
        private router: Router,
        private authService: AuthService
    ) {}

    handleLogin() {
        this.authService.login(
            this.form_model.email,
            this.form_model.password
        ).then(
            win => this.router.navigateByUrl('/dashboard'),
            err => swal("invalid login")
        );
    }

    ngOnInit() {
        document.body.classList.add("signin-page");
    }

    ngOnDestroy(): void {
        document.body.classList.remove("signin-page");
    }

}
