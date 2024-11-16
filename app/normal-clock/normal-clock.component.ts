import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'normal-clock',
  templateUrl: './normal-clock.component.html',
  styleUrls: ['./normal-clock.component.css'],
  standalone: true,
  imports: [CommonModule],  
})
export class NormalClockComponent {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;


  hourRotation: string = '';
  minuteRotation: string = '';
  secondRotation: string = '';

  ngOnInit(): void {
    this.updateClock();
    setInterval(() => this.updateClock(), 1000);
  }

  updateClock(): void {
    const now = new Date();
    this.hours = now.getHours();
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();

    
    this.hourRotation = `rotate(${(this.hours % 12) * 30 + (this.minutes / 2)}deg)`;
    this.minuteRotation = `rotate(${this.minutes * 6}deg)`;
    this.secondRotation = `rotate(${this.seconds * 6}deg)`; 
  }
}
