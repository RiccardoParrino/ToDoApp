import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registration } from './registration/registration';
import { Home } from './home/home';
import { authGuard } from './auth-guard';

export const routes: Routes = [
    
    {   path: '',
        redirectTo: 'login', 
        pathMatch: 'full' 
    },
    {
        path: 'home',
        component: Home,
        title: 'Home page',
        canActivate: [authGuard]
    },
    {
        path: 'login',
        component: Login,
        title: 'Login page'
    },
    {
        path: 'registration',
        component: Registration,
        title: 'Registration page'
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
