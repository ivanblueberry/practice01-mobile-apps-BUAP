import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';

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
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.scss'],
})
export class PerfilComponent implements OnInit {
  // PROPIEDADES DEL COMPONENTE
  usuario: Usuario | null = null;
  cargando: boolean = false;
  error: string = '';
  usuarioId: number = 0;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    // OBTENER EL ID DEL USUARIO DESDE LA RUTA
    this.route.params.subscribe((params) => {
      this.usuarioId = +params['id'];
      if (this.usuarioId) {
        this.cargarUsuario();
      }
    });
  }

  // METODO PARA CARGAR LOS DATOS DEL USUARIO ESPECIFICO
  cargarUsuario(): void {
    this.cargando = true;
    this.error = '';

    // SIMULAR UN PEQUEÑO DELAY PARA MOSTRAR EL LOADING
    setTimeout(() => {
      this.http
        .get<Usuario>(
          `https://jsonplaceholder.typicode.com/users/${this.usuarioId}`
        )
        .subscribe({
          next: (usuario) => {
            this.usuario = usuario;
            this.cargando = false;
          },
          error: (err) => {
            this.error = 'Error al cargar los datos del usuario. Verifica tu conexión e intenta nuevamente.';
            this.cargando = false;
            console.error('ERROR AL CARGAR USUARIO:', err);
          },
        });
    }, 500);
  }

  // METODO PARA VOLVER A LA LISTA DE USUARIOS
  volverAUsuarios(): void {
    // NAVEGAR A LA RUTA COMPLETA DE USUARIOS
    this.router.navigate(['/pages/usuarios']);
  }

  // METODO PARA ABRIR EMAIL
  abrirEmail(email: string): void {
    window.open(`mailto:${email}`, '_self');
  }

  // METODO PARA ABRIR WEBSITE
  abrirWebsite(website: string): void {
    const url = website.startsWith('http') ? website : `http://${website}`;
    window.open(url, '_blank', 'noopener,noreferrer');
  }

  // METODO PARA COPIAR COORDENADAS
  copiarCoordenadas(): void {
    if (this.usuario) {
      const coordenadas = `${this.usuario.address.geo.lat}, ${this.usuario.address.geo.lng}`;
      navigator.clipboard.writeText(coordenadas).then(() => {
        // AQUI PODRIAS MOSTRAR UN TOAST O MENSAJE DE CONFIRMACION
        console.log('COORDENADAS COPIADAS AL PORTAPAPELES');
      }).catch(err => {
        console.error('ERROR AL COPIAR COORDENADAS:', err);
      });
    }
  }
}
