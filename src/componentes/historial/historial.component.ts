import { Component } from '@angular/core';

@Component({
  selector: 'app-historial',
  standalone: true,
  imports: [],
  templateUrl: './historial.component.html',
  styleUrl: './historial.component.css'
})
export class HistorialComponent {
    adelante(){
      history.forward();
    }

    atras(){
      history.back()
    }
}
