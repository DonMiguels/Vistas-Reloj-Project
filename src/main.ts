import { bootstrapApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';  // Importa AppComponent

bootstrapApplication(AppComponent)
  .catch((err) => console.error(err));
