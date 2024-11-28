import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // URL del backend que maneja la autenticación (simulada en este ejemplo)
  private apiUrl = 'https://api.example.com/authenticate'; // Asegúrate de actualizar la URL según tu API real

  constructor(private http: HttpClient) {}

  // Método para autenticar al usuario
  authenticate(username: string, password: string): Observable<any> {
    // Crea el objeto de datos para enviar en la solicitud
    const credentials = { username, password };
    return this.http.post<any>(this.apiUrl, credentials); // Enviar la solicitud POST al servidor
  }
}
