// src/main.ts
import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component'; // Tu componente standalone
import { routes } from './app/app.routes'; // Las rutas que definiste
import { provideRouter } from '@angular/router'; // Proveer el router

bootstrapApplication(AppComponent, {
  providers: [
    // Proveer las rutas
    provideRouter(routes),
  ],
}).catch(err => console.error(err));
