import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MasterComponent} from './layout/master/master.component';
import {routedComponents, routing} from "./app.routing";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsComponent } from './pages/forms/forms.component';
import {AuthService} from "./auth/auth.service";
import {AuthInterceptorService} from "./auth/auth-interceptor.service"
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {EventsService} from "./events/events.service";
import { AdminEventsComponent } from './pages/events/admin-events/admin-events.component';
import {UserService} from "./auth/user.service";

@NgModule({
    declarations: [
        AppComponent,
        MasterComponent,
        routedComponents,
        LoginComponent,
        RegisterComponent,
        FormsComponent,
        AdminEventsComponent,
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpClientModule,
        routing
    ],
    providers: [
        UserService,
        AuthService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
        EventsService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
