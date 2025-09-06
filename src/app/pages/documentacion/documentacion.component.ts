import { Component } from '@angular/core';

// INTERFAZ PARA DEFINIR LA ESTRUCTURA DE UNA TECNOLOGIA
interface Tecnologia {
  nombre: string;
  descripcion: string;
  imagen: string;
  enlace: string;
  version: string;
  color: string;
  caracteristicas: string[];
}

@Component({
  selector: 'app-documentacion',
  templateUrl: './documentacion.component.html',
  styleUrls: ['./documentacion.component.scss']
})
export class DocumentacionComponent {

  // ENLACE A LA DOCUMENTACION OFICIAL DE IONIC
  enlaceIonic = 'https://ionicframework.com/docs';

  // LISTA DE TECNOLOGIAS PARA EL CARRUSEL
  tecnologias: Tecnologia[] = [
    {
      nombre: 'Ionic',
      descripcion: 'Framework de desarrollo de aplicaciones móviles híbridas con Angular, React o Vue',
      imagen: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ionic/ionic-original.svg',
      enlace: 'https://ionicframework.com/',
      version: '7.x',
      color: '#3880ff',
      caracteristicas: [
        'Aplicaciones móviles híbridas',
        'Componentes UI nativos',
        'Integración con Angular',
        'Deploy multiplataforma'
      ]
    },
    {
      nombre: 'Angular',
      descripcion: 'Framework de desarrollo web desarrollado por Google para aplicaciones SPA',
      imagen: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg',
      enlace: 'https://angular.io/',
      version: '17.x',
      color: '#dd0031',
      caracteristicas: [
        'Framework completo',
        'TypeScript nativo',
        'Arquitectura basada en componentes',
        'Inyección de dependencias'
      ]
    },
    {
      nombre: 'TypeScript',
      descripcion: 'Superset de JavaScript que añade tipado estático y características avanzadas',
      imagen: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
      enlace: 'https://www.typescriptlang.org/',
      version: '5.x',
      color: '#3178c6',
      caracteristicas: [
        'Tipado estático',
        'IntelliSense mejorado',
        'Compilación a JavaScript',
        'Orientado a objetos'
      ]
    },
    {
      nombre: 'Node.js',
      descripcion: 'Runtime de JavaScript construido sobre el motor V8 de Chrome para el servidor',
      imagen: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg',
      enlace: 'https://nodejs.org/',
      version: '20.x LTS',
      color: '#339933',
      caracteristicas: [
        'JavaScript en el servidor',
        'Event-driven architecture',
        'NPM ecosystem',
        'Escalabilidad y rendimiento'
      ]
    },
    {
      nombre: 'NPM',
      descripcion: 'Gestor de paquetes para Node.js y el registro de software más grande del mundo',
      imagen: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/npm/npm-original-wordmark.svg',
      enlace: 'https://www.npmjs.com/',
      version: '10.x',
      color: '#cb3837',
      caracteristicas: [
        'Gestor de dependencias',
        'Scripts automatizados',
        'Registro de paquetes',
        'Versionado semántico'
      ]
    }
  ];

  // INDICE ACTUAL DEL CARRUSEL
  currentSlide = 0;

  // METODO PARA NAVEGAR AL SIGUIENTE SLIDE
  nextSlide(): void {
    this.currentSlide = (this.currentSlide + 1) % this.tecnologias.length;
  }

  // METODO PARA NAVEGAR AL SLIDE ANTERIOR
  prevSlide(): void {
    this.currentSlide = this.currentSlide === 0 ? this.tecnologias.length - 1 : this.currentSlide - 1;
  }

  // METODO PARA IR A UN SLIDE ESPECIFICO
  goToSlide(index: number): void {
    this.currentSlide = index;
  }

  // METODO PARA ABRIR ENLACES EXTERNOS
  abrirEnlace(url: string): void {
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // TRACK BY FUNCTION PARA OPTIMIZAR EL RENDIMIENTO
  trackByTecnologia(index: number, tecnologia: Tecnologia): string {
    return tecnologia.nombre;
  }
}
