// src/app/app.routes.ts
import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' }, // Redirige a login si no hay ruta definida
  { path: 'login', component: LoginComponent },
  { path: 'home', component: AppComponent, canActivate: [AuthGuard] }, // Protege la ruta 'home'
];
