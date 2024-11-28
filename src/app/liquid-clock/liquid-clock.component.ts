import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'liquid-clock',
  templateUrl: './liquid-clock.component.html',
  styleUrls: ['./liquid-clock.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class LiquidClockComponent implements OnInit {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;


  ngOnInit(): void {
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime(): void {
    const now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
  }

  
  getFormattedTime(unit: number): string {
    return unit < 10 ? `0${unit}` : `${unit}`;
  }
}
