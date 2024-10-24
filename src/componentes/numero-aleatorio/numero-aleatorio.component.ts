import { Component } from '@angular/core';
import {FormsModule} from '@angular/forms';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-numero-aleatorio',
  standalone: true,
  imports: [
    FormsModule,
    NgForOf
  ],
  templateUrl: './numero-aleatorio.component.html',
  styleUrl: './numero-aleatorio.component.css'
})
export class NumeroAleatorioComponent {
    cantidad:number = 0;
    listaNumeros:Array<number> = [];

    aleatorio(){
      this.listaNumeros = [];
      for (var i=0;i<this.cantidad;i++){
        this.listaNumeros.push(Math.floor(Math.random() * 100) + 1);
      }
    }
}
