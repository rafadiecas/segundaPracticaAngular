import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-interaccion-ventana2',
  standalone: true,
  imports: [],
  templateUrl: './interaccion-ventana2.component.html',
  styleUrl: './interaccion-ventana2.component.css'
})
export class InteraccionVentana2Component implements OnDestroy{
  nuevaVentana: Window | null = null;

  arriba(x:number,y:number) {
    this.nuevaVentana?.moveBy(x, y);
  }

  abajo() {
    this.nuevaVentana?.moveBy(0, 100);
  }

  derecha() {
    this.nuevaVentana?.moveBy(100, 0);
  }

  izquierda() {
    this.nuevaVentana?.moveBy(-100, 0);
  }

  ngOnDestroy():void{
    if (this.nuevaVentana){
      this.nuevaVentana.close();
    }
  }

  abrirVentana() {
    this.nuevaVentana = window.open('', '', 'width=400,height=400');
  }
}
