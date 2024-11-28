import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service'; // Asegúrate de que el servicio AuthService esté configurado

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],  
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string | null = null;

  constructor(private authService: AuthService, private router: Router) {}

  onLogin() {
    // Validar que los campos no estén vacíos
    if (!this.username || !this.password) {
      this.errorMessage = 'Por favor ingresa nombre de usuario y contraseña.';
      return;
    }

    console.log('Intentando iniciar sesión con:', this.username, this.password);

    // Llamada al servicio AuthService para autenticar
    if (this.authService.authenticate(this.username, this.password)) {
      // Si la autenticación es exitosa
      this.router.navigate(['/home']);  // Redirige a la página principal
    } else {
      // Si la autenticación falla
      this.errorMessage = 'Nombre de usuario o contraseña incorrectos.';
    }
  }
}
