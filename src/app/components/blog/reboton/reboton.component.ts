import { Component } from '@angular/core';

@Component({
  selector: 'app-reboton',
  templateUrl: './reboton.component.html',
  styleUrls: ['./reboton.component.css']
})
export class RebotonComponent {
  //titulo = "Estrategias para crear componentes contextuales de Angular estilizados con Tailwind para mejorar la lectura y reutilización de código"
  titulo ="Estrategias para crear componentes contextuales en Angular con Tailwind CSS"
  funcion = "useless ( some: any ) { }";
  bopen ="{"
  bclose ="}"
  f2 = "   if (!options.click) options.click = this.useless;"
  cambiarTitulo(contexto: any) {
    contexto.titulo = "hola!";
  }
}
