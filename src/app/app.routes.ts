import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';


const APP_ROUTES: Routes = [
    { path: '', component: HomeComponent},
    { path: 'Home', component: HomeComponent },
    { path: '**', pathMatch: 'full', redirectTo: 'home ' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
