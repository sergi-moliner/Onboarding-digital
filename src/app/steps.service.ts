import { Injectable } from '@angular/core';
import { iStep } from './istep.interface';

@Injectable({
  providedIn: 'root',
})
export class StepsService {
  constructor() {}

  getSteps(): iStep[] {
    return [
      {
        title: 'Dedica moltes hores',
        description:
          `Un mínim de 30 hores a la setmana. Si no en tens prou, hauràs de dedicar-li més hores.
          Al principi sembla impossible, però notaràs una millora ràpidament.`,
        img: '../../assets/images/time_managment.svg',
        bgcolor: '#0d9ea6',
      },
      {
        title: 'Programa projectes propis:',
        description:
        `Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials.
        La motivació i la implicació en el projecte ajudarà a accelerar el teu aprenentatge.`,
        img: '../../assets/images/programming.svg',
        bgcolor: '#d5dbdb',
      },
      {
        title: 'Procura descansar:',
        description:
        `Descansar bé i desconnectar són vitals. D'aquesta manera reduiràs l'estrès i l'ansietat.
        Milloraràs la teva concentració i consolidaràs el teu aprenentatge.`,
        img: '../../assets/images/meditation.svg',
        bgcolor: '#edc25c',
      },
    ];
  }
}
