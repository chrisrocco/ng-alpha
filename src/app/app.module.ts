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
import { AdminEventsComponent } from './pages/events/admin-events/admin-events.component';
import {UserService} from "./auth/user.service";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";

import {MaterializeModule} from "angular2-materialize";
import {MarketService} from "./services/market/market.service";
import {AppUsersService} from "./services/app-users/app-users.service";
import {EventsService} from "./services/events/events.service";
import { UserSelectorComponent } from './shared/user-selector/user-selector.component';
import { MarketSelectorComponent } from './shared/market-selector/market-selector.component';

@NgModule({
    declarations: [
        AppComponent,
        MasterComponent,
        routedComponents,
        LoginComponent,
        RegisterComponent,
        FormsComponent,
        AdminEventsComponent,
        UserSelectorComponent,
        MarketSelectorComponent,
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
        MarketService,
        AppUsersService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
