import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MasterComponent} from './layout/master/master.component';
import {routedComponents, routing} from "./app.routing";
import { FormsComponent } from './pages/forms/forms.component';
import {AuthService} from "./auth/auth.service";
import {AuthInterceptorService} from "./auth/auth-interceptor.service"
import {FormsModule} from "@angular/forms";
import {HTTP_INTERCEPTORS, HttpClientModule} from "@angular/common/http";
import {EventsService} from "./events/events.service";
import { AdminEventsComponent } from './pages/events/admin-events/admin-events.component';
import {UserService} from "./auth/user.service";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";

import {MaterializeModule} from "angular2-materialize";
import {MarketService} from "./services/market/market.service";

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
        MaterializeModule,
        routing
    ],
    providers: [
        UserService,
        AuthService,
        { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true },
        EventsService,
        MarketService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
