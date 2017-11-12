import {Component, OnInit, ViewEncapsulation, OnDestroy} from '@angular/core';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    encapsulation: ViewEncapsulation.None
})
export class RegisterComponent implements OnInit, OnDestroy {

    ngOnDestroy(): void {
        document.body.classList.remove("signup-page");
    }

    ngOnInit() {
        document.body.classList.add("signup-page");
    }

}
