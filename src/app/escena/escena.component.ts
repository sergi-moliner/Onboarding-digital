import { Component, Input } from '@angular/core';
import { iStep } from '../istep.interface';
import { trigger, transition, style, animate } from '@angular/animations';

@Component({
  selector: 'app-escena',
  standalone: true,
  imports: [],
  templateUrl: './escena.component.html',
  styleUrl: './escena.component.css',
  animations: [
    trigger('bounce', [
      transition('* => *', [
        animate('350ms ease-out', style({ transform: 'translateY(-10px)' })),
        animate('350ms ease-out', style({ transform: 'translateY(0)' }))
      ])
    ])
  ]
})
export class EscenaComponent {
  @Input() frases: iStep[] = [];
  currentStep: number = 0;

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
  selectSlide(i: number): void {
    this.currentStep = i;
  }
}
