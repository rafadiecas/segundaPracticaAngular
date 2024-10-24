import { Component } from '@angular/core';

@Component({
  selector: 'app-interaccion-ventana1',
  standalone: true,
  imports: [],
  templateUrl: './interaccion-ventana1.component.html',
  styleUrl: './interaccion-ventana1.component.css'
})
export class InteraccionVentana1Component {
  nuevaVentana: Window | null = null;
  resolucion: string = '';

  abrirVentana() {
    this.nuevaVentana = window.open('', '', 'width=600,height=400');
    if (this.nuevaVentana) {
      this.actualizarResolucion();
      this.nuevaVentana.addEventListener('resize', this.actualizarResolucion.bind(this));
    }
  }

  actualizarResolucion() {
    if (this.nuevaVentana) {
      this.resolucion = `${this.nuevaVentana.innerWidth} x ${this.nuevaVentana.innerHeight}`;
    }
  }
}
