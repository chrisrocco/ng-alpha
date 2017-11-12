import {MasterComponent} from "./layout/master/master.component";
import {Routes, RouterModule} from "@angular/router";
import {AdminEventsComponent} from "./pages/events/admin-events/admin-events.component";
import {LoginComponent} from "./pages/login/login.component";
import {RegisterComponent} from "./pages/register/register.component";
import {BookingComponent} from "./pages/booking/booking.component";

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
                path: 'booking',
                component: BookingComponent
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

export const routedComponents = [MasterComponent, LoginComponent, BookingComponent];