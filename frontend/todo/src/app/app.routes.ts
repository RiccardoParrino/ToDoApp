import { Routes } from '@angular/router';
import { Login } from './login/login';
import { Registration } from './registration/registration';

export const routes: Routes = [
    {
        path: 'login',
        component: Login,
        title: 'Login page'
    },
    {
        path: 'registration',
        component: Registration,
        title: 'Registration page'
    }
];
