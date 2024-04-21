import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { iStep } from '../istep.interface';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css'
})
export class EscenaComponent {
  @Input() frases: iStep[] = [];
  currentStep : number = 0;

  backgrounds: { image: string, color: string }[] = [
    { image: '../../assets/images/time_managment.svg', color: '#0d9ea6' },
    { image: '../../assets/images/programming.svg', color: '#d5dbdb' },
    { image: '../../assets/images/meditation.svg', color: '#edc25c' },
  ];

  next(): void {
    if (this.currentStep < this.frases.length - 1) {
      this.currentStep++;
    }
  }
  prev(): void {
    if (this.currentStep > 0) {
      this.currentStep--;
    }
  }
  selectSlide(i : number){
    this.currentStep = i;
  }
}
