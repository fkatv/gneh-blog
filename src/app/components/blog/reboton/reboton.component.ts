import { Component } from '@angular/core';

@Component({
  selector: 'app-reboton',
  templateUrl: './reboton.component.html',
  styleUrls: ['./reboton.component.css']
})
export class RebotonComponent {
  titulo = "Estrategias para crear componentes contextuales de Angular estilizados con Tailwind para mejorar la lectura y reutilización de código"

  cambiarTitulo(contexto: any) {
    contexto.titulo = "hola!";
  }
}
