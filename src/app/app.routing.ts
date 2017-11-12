import {MasterComponent} from "./layout/master/master.component";
import {Routes, RouterModule} from "@angular/router";
import {LoginComponent} from "./login/login.component";
import {RegisterComponent} from "./register/register.component";
import {FormsComponent} from "./pages/forms/forms.component";

const routes: Routes = [
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'dashboard',
        component: MasterComponent,
        children: [
            {
                path: 'forms',
                component: FormsComponent
            }
        ]
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];

export const routing = RouterModule.forRoot(routes);

export const routedComponents = [MasterComponent, LoginComponent, FormsComponent];