import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HousesComponent } from './components/houses/houses.component';
import { LoginComponent } from './components/login/login.component';



const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'Home', component: HomeComponent },
    { path: 'About', component: AboutComponent },
    { path: 'Houses', component: HousesComponent },
    { path: 'login', component: LoginComponent },
    { path: ';', component: HousesComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home ' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
