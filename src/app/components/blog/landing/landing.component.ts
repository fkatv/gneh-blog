import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit{
  entradas!: { name: string, routerlink: string, fecha: string, imgRoute: string }[] ;
  labels!: {name: string, routerlink: string}[];

  constructor( private router: Router ) {}
  
  ngOnInit(): void {
    this.labels = [
      { name: 'Experiencia de usuario', routerlink:"/blog"},
      { name: 'Mi autoaprendizaje UX', routerlink: "/blog"},
      { name: 'Ejercicios Flujos de Usuario', routerlink: "/blog"}
    ];
    this.entradas = [
      {
        name: 'Estrategias para crear componentes contextuales con Tailwind CSS',
        routerlink: 'blog/estrategias-para-crear-componentes-contextuales-tailwind',
        fecha: '23 de Diciembre de 2023',
        imgRoute: '../../../../assets/blogs/entradas/website-wireframe.webp'
      },
      {
        name: 'Diseña secciones asimétricas en Tailwind con skew (Pronto)',
        routerlink: 'blog/crea-secciones-asimetricas-con-skew',
        fecha: '2 de Enero de 2024',
        imgRoute: '../../../../assets/blogs/entradas/skew.webp'
      },
    ];
  }

  navegarA(routerlink: string) {
    this.router.navigate([routerlink]);
  }
}
