// auth.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private _isAuthenticated = new BehaviorSubject<boolean>(false);
  isAuthenticated$ = this._isAuthenticated.asObservable();

  constructor() {
    const token = localStorage.getItem('token');
    this._isAuthenticated.next(!!token);
  }

  // Método authenticate agregado
  authenticate(username: string, password: string): boolean {
    // Aquí deberías llamar a tu API o lógica de autenticación
    if (username === 'admin' && password === 'admin') {
      localStorage.setItem('token', 'fake-jwt-token');
      this._isAuthenticated.next(true);
      return true;
    }
    return false;
  }

  logout(): void {
    localStorage.removeItem('token');
    this._isAuthenticated.next(false);
  }
}
