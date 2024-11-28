import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common'; 

@Component({
  selector: 'graphic-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './graphic-clock.component.html',
  styleUrls: ['./graphic-clock.component.css']
})
export class GraphicClockComponent implements OnInit {
  currentTime: Date = new Date();  
  hourHeight: number = 0;
  minuteHeight: number = 0;
  secondHeight: number = 0;

  hourDivisions: number[] = Array(12).fill(0);  // 12 divisiones para la barra de la hora
  minuteDivisions: number[] = Array(6).fill(0); // 6 divisiones para la barra de los minutos
  secondDivisions: number[] = Array(6).fill(0); // 6 divisiones para la barra de los segundos

  constructor() {
    setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnInit(): void {
    this.updateTime();
  }

  updateTime(): void {
    this.currentTime = new Date();

    // Calcular las alturas de las barras
    this.hourHeight = (this.currentTime.getHours() % 12) * 100 / 12; 
    this.minuteHeight = (this.currentTime.getMinutes() * 100) / 60;  
    this.secondHeight = (this.currentTime.getSeconds() * 100) / 60; 
  }

  getFormattedTime(): string {
    const hours = String(this.currentTime.getHours()).padStart(2, '0');
    const minutes = String(this.currentTime.getMinutes()).padStart(2, '0');
    const seconds = String(this.currentTime.getSeconds()).padStart(2, '0');
    return `${hours}:${minutes}:${seconds}`;
  }
}
