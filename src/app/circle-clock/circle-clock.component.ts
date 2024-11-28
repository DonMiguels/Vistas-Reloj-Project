import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'circle-clock',
  templateUrl: './circle-clock.component.html',
  styleUrls: ['./circle-clock.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class CircleClockComponent implements OnInit {
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

  getHoursRotation(): number {
    return (this.hours % 12) * 30; 
  }

  getMinutesRotation(): number {
    return this.minutes * 6; 
  }

  getSecondsRotation(): number {
    return this.seconds * 6; 
  }
}
