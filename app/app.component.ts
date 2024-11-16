import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component'; 
import { AuthService } from './services/auth.service'; 
import { Router, RouterModule } from '@angular/router';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { NormalClockComponent } from './normal-clock/normal-clock.component';
import { SolarClockComponent } from './solar-clock/solar-clock.component';
import { LiquidClockComponent } from './liquid-clock/liquid-clock.component';
import { AstronomicClockComponent } from './astronomic-clock/astronomic-clock.component';
import { FlowerClockComponent } from './flower-clock/flower-clock.component';
import { CircleClockComponent } from './circle-clock/circle-clock.component';
import { GraphicClockComponent } from './graphic-clock/graphic-clock.component';
import { ColorClockComponent } from './color-clock/color-clock.component';
import { WaveClockComponent } from './wave-clock/wave-clock.component';
import { DropdownComponent } from './dropdown-component/dropdown-component.component';
import { Subscription } from 'rxjs'; // Importamos Subscription para manejar la suscripción

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [ RouterModule,
    CommonModule,
    DigitalClockComponent,
    NormalClockComponent,
    SolarClockComponent,
    LoginComponent,
    LiquidClockComponent,
    GraphicClockComponent,
    AstronomicClockComponent,
    FlowerClockComponent,
    CircleClockComponent,
    ColorClockComponent,
    WaveClockComponent,
    DropdownComponent
  ]
})
export class AppComponent {
  selectedView: string = 'welcome';  
  isAuthenticated: boolean = false;  
  private authSubscription: Subscription = Subscription.EMPTY;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    // Verificamos si el usuario está autenticado cuando el componente se inicializa
    this.authSubscription = this.authService.isAuthenticated$.subscribe(isAuth => {
      this.isAuthenticated = isAuth; 

      if (!isAuth) {
        // Si no está autenticado, redirige al login
        this.router.navigate(['/login']);
      } else {
        // Si está autenticado, redirige a la vista de reloj
        this.router.navigate(['/home']);
      }
    });
  }

  ngOnDestroy(): void {
    // Asegúrate de desuscribirte para evitar fugas de memoria
    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }
  }

  selectView(view: string): void {
    this.selectedView = view;
  }

  logout(): void {
    this.authService.logout();  // Llama al método de logout del servicio
    this.isAuthenticated = false;  
    this.router.navigate(['/login']);  // Redirige al login
  }
}
