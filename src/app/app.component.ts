import { Component } from '@angular/core';
import { DigitalClockComponent } from './digital-clock/digital-clock.component';
import { NormalClockComponent } from './normal-clock/normal-clock.component';
import { SolarClockComponent } from './solar-clock/solar-clock.component';
import { FlowerClockComponent } from './flower-clock/flower-clock.component';
import { AstronomicClockComponent } from './astronomic-clock/astronomic-clock.component';
import { GraphicClockComponent } from './graphic-clock/graphic-clock.component';
import { CircleClockComponent } from './circle-clock/circle-clock.component';
import { ColorClockComponent } from './color-clock/color-clock.component';
import { WaveClockComponent } from './wave-clock/wave-clock.component';
import { LiquidClockComponent } from './liquid-clock/liquid-clock.component';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown-component/dropdown-component.component';  

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    CommonModule,
    NormalClockComponent,
    SolarClockComponent,
    FlowerClockComponent,
    DigitalClockComponent,
    AstronomicClockComponent,
    GraphicClockComponent,
    CircleClockComponent,
    ColorClockComponent,
    WaveClockComponent,
    LiquidClockComponent,
    DropdownComponent 
  ]
})
export class AppComponent {
  selectedView: string = 'welcome';  


  selectView(view: string): void {
    this.selectedView = view;
  }
}
