import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'color-clock',
  templateUrl: './color-clock.component.html',
  styleUrls: ['./color-clock.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class ColorClockComponent implements OnInit {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;
  backgroundStyle: string = ''; // Estilo de fondo dinámico

  ngOnInit(): void {
    setInterval(() => this.updateTime(), 1000);  // Actualizar cada segundo
  }

  updateTime(): void {
    const now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();

    // Actualizamos el fondo basado en la hora, minutos y segundos
    this.backgroundStyle = this.getBackgroundColor();
  }

  getBackgroundColor(): string {
    // Colores calculados según la hora, minuto y segundo
    const hourColor = (this.hours % 24) * 15;
    const minuteColor = (this.minutes % 60) * 4;
    const secondColor = (this.seconds % 60) * 6;

    // Generar un degradado lineal
    return `linear-gradient(45deg, hsl(${hourColor}, 100%, 50%), hsl(${minuteColor}, 100%, 50%), hsl(${secondColor}, 100%, 50%))`;
  }
}
