// auth.guard.ts
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(): Observable<boolean> | Promise<boolean> | boolean {
    return this.authService.isAuthenticated$.toPromise().then(isAuthenticated => {
      if (isAuthenticated) {
        return true;  // Permite el acceso si está autenticado
      } else {
        this.router.navigate(['/login']);  // Redirige al login si no está autenticado
        return false;  // Bloquea el acceso
      }
    });
  }
}
