import {Component, OnInit, ViewEncapsulation, OnDestroy} from '@angular/core';
import {Router} from "@angular/router";
import {MasterComponent} from "../layout/master/master.component";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    encapsulation: ViewEncapsulation.None
})
export class LoginComponent implements OnInit, OnDestroy {

    constructor(private router: Router) {
    }

    handleLogin() {
        this.router.navigateByUrl('/dashboard');
    }

    ngOnInit() {
        document.body.classList.add("signin-page");
    }

    ngOnDestroy(): void {
        document.body.classList.remove("signin-page");
    }

}
