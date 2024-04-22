import { Component } from '@angular/core';
import { EscenaComponent } from '../escena/escena.component';
import { iStep } from '../istep.interface';
import { StepsService } from '../steps.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EscenaComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent{
  frasesOnBoarding: iStep[] = [];

  constructor(private stepsService: StepsService) {  }

  ngOnInit(): void {
    this.frasesOnBoarding = this.stepsService.getSteps();
  }
}
