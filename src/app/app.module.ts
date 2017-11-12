import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {MasterComponent} from './layout/master/master.component';
import {routedComponents, routing} from "./app.routing";
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FormsComponent } from './pages/forms/forms.component';

@NgModule({
    declarations: [
        AppComponent,
        MasterComponent,
        routedComponents,
        LoginComponent,
        RegisterComponent,
        FormsComponent
    ],
    imports: [
        BrowserModule,
        routing
    ],
    providers: [],
    bootstrap: [AppComponent]
})
export class AppModule {
}
