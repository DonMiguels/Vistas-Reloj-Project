import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'flower-clock',
  templateUrl: './flower-clock.component.html',
  styleUrls: ['./flower-clock.component.css'],
  standalone: true,
  imports: [CommonModule],
})
export class FlowerClockComponent implements OnInit {
  hours: number = 0;
  minutes: number = 0;
  seconds: number = 0;

  ngOnInit(): void {
    setInterval(() => this.updateTime(), 1000);
  }

  updateTime(): void {
    const now = new Date();
    this.hours = now.getHours() % 12;
    this.minutes = now.getMinutes();
    this.seconds = now.getSeconds();
  }

  getPetalStyle(layer: string, index: number): any {
    const angle = index * (360 / 12);
    const color =
      layer === 'hours'
        ? `hsl(${this.hours * 30}, 80%, 50%)`
        : layer === 'minutes'
        ? `hsl(${this.minutes * 6}, 80%, 60%)`
        : `hsl(${this.seconds * 6}, 80%, 70%)`;
    const size = layer === 'hours' ? '60px' : layer === 'minutes' ? '45px' : '30px';

    return {
      transform: `rotate(${angle}deg) translate(90px)`,
      width: size,
      height: size,
      backgroundColor: color,
    };
  }

  getHandStyle(type: string): any {
    const rotation =
      type === 'hour'
        ? (this.hours + this.minutes / 60) * 30
        : type === 'minute'
        ? this.minutes * 6
        : this.seconds * 6;

    return {
      transform: `rotate(${rotation}deg)`,
    };
  }
}
