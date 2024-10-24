import { Component } from '@angular/core';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-fecha-hora',
  standalone: true,
  imports: [
    DatePipe
  ],
  templateUrl: './fecha-hora.component.html',
  styleUrl: './fecha-hora.component.css'
})
export class FechaHoraComponent {
  tiempo: Date = new Date();
  private intervalId: any;

  ngOnInit() {
    this.intervalId = setInterval(() => {
      this.tiempo = new Date(Date.now());
    }, 1000);
  }


  ngOnDestroy() {
    if (this.intervalId) {
      clearInterval(this.intervalId);
    }
  }


}
