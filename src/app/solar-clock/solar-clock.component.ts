import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'solar-clock',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './solar-clock.component.html',
  styleUrls: ['./solar-clock.component.css'],
})
export class SolarClockComponent {
  shadowRotation: string = ''; 
  shadowLength: number = 90;


  latitude: number = 45; 

  ngOnInit(): void {
    this.updateShadow();
    setInterval(() => this.updateShadow(), 1000); 
  }

  updateShadow(): void {
    const now = new Date();
    const hours = now.getHours() % 12; 
    const minutes = now.getMinutes();

    
    const hourAngle = (hours * 30) + (minutes * 0.5); 
    const sunAngle = hourAngle + 180; 

    const sunElevation = 90 - Math.abs(this.latitude - hourAngle); 
    this.shadowLength = Math.max(50, sunElevation); 
    
    this.shadowRotation = `rotate(${sunAngle}deg)`;
  }
}
