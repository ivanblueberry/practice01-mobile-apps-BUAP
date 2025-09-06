import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

// INTERFAZ PARA DEFINIR LA ESTRUCTURA DEL USUARIO
interface Usuario {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
}

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss'],
})
export class UsuariosComponent implements OnInit {

  // PROPIEDADES DEL COMPONENTE
  usuarios: Usuario[] = [];
  cargando: boolean = false;
  error: string = '';

  constructor(
    private http: HttpClient,
    private router: Router
  ) {}

  ngOnInit(): void {
    // CARGAR USUARIOS AL INICIALIZAR EL COMPONENTE
    this.cargarUsuarios();
  }

  // METODO PARA CARGAR USUARIOS DESDE LA API
  cargarUsuarios(): void {
    this.cargando = true;
    this.error = '';

    // SIMULAR DELAY DE CARGA PARA MOSTRAR EL SPINNER
    setTimeout(() => {
      this.http
        .get<Usuario[]>('https://jsonplaceholder.typicode.com/users')
        .subscribe({
          next: (usuarios) => {
            // ASIGNAR USUARIOS Y OCULTAR LOADING
            this.usuarios = usuarios;
            this.cargando = false;
            console.log('USUARIOS CARGADOS EXITOSAMENTE:', usuarios.length);
          },
          error: (err) => {
            // MANEJAR ERROR Y MOSTRAR MENSAJE
            this.error = 'Error al cargar los usuarios. Intenta de nuevo.';
            this.cargando = false;
            console.error('ERROR AL CARGAR USUARIOS:', err);
          },
        });
    }, 1000); // DELAY DE 1 SEGUNDO PARA MOSTRAR LA ANIMACION DE CARGA
  }

  // METODO PARA RECARGAR USUARIOS
  recargarUsuarios(): void {
    console.log('RECARGANDO USUARIOS...');
    this.cargarUsuarios();
  }

  // METODO PARA NAVEGAR AL PERFIL DEL USUARIO
  verPerfil(usuarioId: number): void {
    console.log('NAVEGANDO AL PERFIL DEL USUARIO:', usuarioId);
    // NAVEGAR A LA RUTA COMPLETA DESDE LA RAIZ
    this.router.navigate(['/pages/perfil', usuarioId]);
  }

  // TRACK BY FUNCTION PARA OPTIMIZAR EL RENDIMIENTO EN *ngFor
  trackByUserId(index: number, usuario: Usuario): number {
    return usuario.id;
  }
}
