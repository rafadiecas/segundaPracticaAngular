import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {FechaHoraComponent} from '../componentes/fecha-hora/fecha-hora.component';
import {NumeroAleatorioComponent} from '../componentes/numero-aleatorio/numero-aleatorio.component';
import {HistorialComponent} from '../componentes/historial/historial.component';
import {InteraccionVentana1Component} from '../componentes/interaccion-ventana1/interaccion-ventana1.component';
import {InteraccionVentana2Component} from '../componentes/interaccion-ventana2/interaccion-ventana2.component';
import {CookieNombreComponent} from '../componentes/cookie-nombre/cookie-nombre.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FechaHoraComponent, NumeroAleatorioComponent, HistorialComponent, InteraccionVentana1Component, InteraccionVentana2Component, CookieNombreComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'segundaPractica';
}
