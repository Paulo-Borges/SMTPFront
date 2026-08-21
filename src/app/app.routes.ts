import { Routes } from '@angular/router';
import { Welcome } from './pages/welcome/welcome';
import { Login } from './components/login/login';
import { authGuard } from './guard/auth.guard';
import { Home } from './pages/home/home';
import { CriarUser } from './pages/criar-user/criar-user';
import { Enviar } from './pages/enviar/enviar';

export const routes: Routes = [
    { path: '', redirectTo: '/login', pathMatch: 'full'},
    { path: 'login', component: Login},
    { path: 'home', component: Home},
    { path: 'criarUser', component: CriarUser},
    { path: 'welcome', component: Welcome, canActivate: [authGuard]},
    { path: 'enviar', component: Enviar, canActivate: [authGuard]} 
];
