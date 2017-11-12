import {MasterComponent} from "./layout/master/master.component";
import {Routes, RouterModule} from "@angular/router";
import {FormsComponent} from "./pages/forms/forms.component";
import {AdminEventsComponent} from "./pages/events/admin-events/admin-events.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";

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
            },
            {
                path: 'events',
                component: AdminEventsComponent
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