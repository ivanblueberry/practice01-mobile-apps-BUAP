import { Component } from '@angular/core';

// INTERFAZ PARA DEFINIR LA ESTRUCTURA DE UN COMPONENTE
interface ComponenteInfo {
  nombre: string;
  selector: string;
  ruta: string;
  descripcion: string;
  funcionalidad: string[];
  dependencias: string[];
  tipo: 'Página' | 'Layout' | 'Principal';
}

@Component({
  selector: 'app-estructuras',
  templateUrl: './estructuras.component.html',
  styleUrls: ['./estructuras.component.scss']
})
export class EstructurasComponent {
  
  // LISTA DE TODOS LOS COMPONENTES DE LA APLICACION
  componentes: ComponenteInfo[] = [
    {
      nombre: 'AppComponent',
      selector: 'app-root',
      ruta: '/src/app/app.component.ts',
      descripcion: 'Componente raíz de la aplicación Angular',
      funcionalidad: [
        'Punto de entrada principal de la aplicación',
        'Contiene el router-outlet para la navegación',
        'Incluye el header compartido'
      ],
      dependencias: ['RouterOutlet', 'HeaderComponent'],
      tipo: 'Principal'
    },
    {
      nombre: 'HeaderComponent',
      selector: 'app-header',
      ruta: '/src/app/shared/layout/header/header.component.ts',
      descripcion: 'Componente de encabezado compartido para toda la aplicación',
      funcionalidad: [
        'Navegación principal de la aplicación',
        'Branding y logo',
        'Enlaces a las diferentes secciones'
      ],
      dependencias: ['RouterLink', 'RouterLinkActive'],
      tipo: 'Layout'
    },
    {
      nombre: 'HomeComponent',
      selector: 'app-home',
      ruta: '/src/app/pages/home/home.component.ts',
      descripcion: 'Página de inicio de la aplicación',
      funcionalidad: [
        'Página de bienvenida',
        'Información general de la aplicación',
        'Enlaces a las funcionalidades principales'
      ],
      dependencias: ['CommonModule'],
      tipo: 'Página'
    },
    {
      nombre: 'UsuariosComponent',
      selector: 'app-usuarios',
      ruta: '/src/app/pages/usuarios/usuarios.component.ts',
      descripcion: 'Componente para gestión y visualización de usuarios',
      funcionalidad: [
        'Listado de usuarios desde JSONPlaceholder API',
        'Estados de carga y manejo de errores',
        'Navegación al perfil de usuarios',
        'Funcionalidad de recarga de datos',
        'Optimización con trackBy function'
      ],
      dependencias: ['HttpClient', 'Router', 'CommonModule'],
      tipo: 'Página'
    },
    {
      nombre: 'PerfilComponent',
      selector: 'app-perfil',
      ruta: '/src/app/pages/perfil/perfil.component.ts',
      descripcion: 'Componente para mostrar detalles específicos de un usuario',
      funcionalidad: [
        'Carga de datos específicos de usuario por ID',
        'Visualización completa de información personal',
        'Interacciones con email y sitio web',
        'Copia de coordenadas geográficas',
        'Navegación de regreso a usuarios'
      ],
      dependencias: ['ActivatedRoute', 'Router', 'HttpClient'],
      tipo: 'Página'
    },
    {
      nombre: 'DocumentacionComponent',
      selector: 'app-documentacion',
      ruta: '/src/app/pages/documentacion/documentacion.component.ts',
      descripcion: 'Componente para mostrar documentación de la aplicación',
      funcionalidad: [
        'Documentación técnica',
        'Guías de uso',
        'Información sobre la API utilizada'
      ],
      dependencias: ['CommonModule'],
      tipo: 'Página'
    },
    {
      nombre: 'EstructurasComponent',
      selector: 'app-estructuras',
      ruta: '/src/app/pages/estructuras/estructuras.component.ts',
      descripcion: 'Componente actual que muestra la arquitectura de la aplicación',
      funcionalidad: [
        'Visualización de todos los componentes',
        'Información detallada de cada componente',
        'Estructura organizacional de la app'
      ],
      dependencias: ['CommonModule'],
      tipo: 'Página'
    }
  ];
  
  // ESTADISTICAS DE LA APLICACION
  estadisticas = {
    totalComponentes: this.componentes.length,
    componentesPagina: this.componentes.filter(c => c.tipo === 'Página').length,
    componentesLayout: this.componentes.filter(c => c.tipo === 'Layout').length,
    componentesPrincipales: this.componentes.filter(c => c.tipo === 'Principal').length
  };
  
  // METODO PARA OBTENER COMPONENTES POR TIPO
  obtenerComponentesPorTipo(tipo: string): ComponenteInfo[] {
    return this.componentes.filter(componente => componente.tipo === tipo);
  }
  
  // METODO PARA OBTENER COLOR SEGUN EL TIPO
  obtenerColorTipo(tipo: string): string {
    switch(tipo) {
      case 'Página': return 'primary';
      case 'Layout': return 'success';
      case 'Principal': return 'warning';
      default: return 'secondary';
    }
  }
  
  // TRACK BY FUNCTION PARA OPTIMIZAR EL RENDIMIENTO
  trackByComponente(index: number, componente: ComponenteInfo): string {
    return componente.selector;
  }
}
