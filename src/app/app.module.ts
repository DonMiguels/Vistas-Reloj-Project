import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app.component'; // Tu componente standalone
import { routes } from './app.routes'; // Las rutas que definiste

bootstrapApplication(AppComponent, {
  providers: [
    // Proveedores adicionales si es necesario
    { provide: 'APP_ROUTES', useValue: routes },
  ],
}).catch(err => console.error(err));
