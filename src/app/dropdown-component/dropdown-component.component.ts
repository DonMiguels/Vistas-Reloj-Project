import { Component, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown-component.component.html',
  styleUrls: ['./dropdown-component.component.css'],
  standalone: true, 
  imports: [CommonModule] 
})
export class DropdownComponent {
  @Output() viewSelected = new EventEmitter<string>(); 
  
  onSelectView(view: string): void {
    this.viewSelected.emit(view); 
  }
}
