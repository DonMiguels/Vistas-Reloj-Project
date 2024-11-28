import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'wave-clock',
  templateUrl: './wave-clock.component.html',
  styleUrls: ['./wave-clock.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class WaveClockComponent implements OnInit {
  // Tiempo en minutos (representa horas, minutos y segundos)
  timeInMinutes: number = new Date().getHours() * 60 + new Date().getMinutes();  // Establecer el valor inicial

  // Variables para las horas, minutos y segundos
  hours: number = Math.floor(this.timeInMinutes / 60);
  minutes: number = this.timeInMinutes % 60;
  seconds: number = new Date().getSeconds();

  // Actualizar el reloj
  ngOnInit(): void {
    setInterval(() => this.updateTime(), 1000);  
  }

  updateTime(): void {
    // Actualizar el tiempo en segundos
    this.seconds = new Date().getSeconds();

    // Convertir el valor de timeInMinutes a horas y minutos
    this.hours = Math.floor(this.timeInMinutes / 60);
    this.minutes = this.timeInMinutes % 60;
  }

  // Método para reiniciar la hora al valor actual
  resetTime(): void {
    const now = new Date();
    this.timeInMinutes = now.getHours() * 60 + now.getMinutes(); 
  }
}
