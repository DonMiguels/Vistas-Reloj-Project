import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'astronomic-clock',
  templateUrl: './astronomic-clock.component.html',
  styleUrls: ['./astronomic-clock.component.css'],
  standalone: true,
  imports: [CommonModule, FormsModule]
})
export class AstronomicClockComponent implements OnInit {
  sunPosition = 50; // Posición inicial del sol
  moonPosition = 50; // Posición inicial de la luna

  ngOnInit() {
    this.updateSunAndMoonPositions();
    setInterval(() => this.updateSunAndMoonPositions(), 60000); // Actualizar cada minuto
  }

  // Actualiza la posición del sol y la luna dependiendo de la hora
  updateSunAndMoonPositions() {
    const currentHour = new Date().getHours();
    this.sunPosition = (currentHour / 24) * 100;  // Ajuste de posición en porcentaje para el sol
    this.moonPosition = ((currentHour + 12) % 24 / 24) * 100;  // Ajuste de posición en porcentaje para la luna
  }

  // Formatea la hora actual como HH:MM:SS
  getFormattedTime(): string {
    const now = new Date();
    return now.toLocaleTimeString();
  }
}
