import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'gneh';
  titulo = "Estrategias para crear componentes contextuales de Angular estilizados con Tailwind para mejorar la lectura y reutilización de código"

  cambiarTitulo(contexto: any) {
    contexto.titulo = "hola!";
  }
}
