import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cookie-nombre',
  standalone: true,
  imports: [
    FormsModule
  ],
  templateUrl: './cookie-nombre.component.html',
  styleUrl: './cookie-nombre.component.css'
})
export class CookieNombreComponent implements OnInit {
  nombre: string = "";
  saludo: string = "";

  ngOnInit(): void {
    const nombreCookie = this.getCookie("nombre");
    if (nombreCookie) {
      this.nombre = nombreCookie;
      this.saludo = `Hola, ${this.nombre}!`;
    }
  }

  getCookie(name: string) {
    const nameEQ = name + "=";
    const ca = document.cookie.split(';');
    for (let i = 0; i < ca.length; i++) {
      let c = ca[i].trim();
      if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
  }

  setCookie(name: string, value: string, days: number) {
    const date = new Date();
    date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
    const expires = "expires=" + date.toUTCString();
    document.cookie = name + "=" + value + ";" + expires + ";path=/";
  }

  guardarNombre() {
    this.setCookie('nombre', this.nombre, 1);
    this.saludo = `Hola, ${this.nombre}!`;
  }
}
