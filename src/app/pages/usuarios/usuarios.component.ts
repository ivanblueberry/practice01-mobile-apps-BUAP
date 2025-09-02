import { Component, OnInit } from '@angular/core';
import { UsuariosService, Usuario } from '../../core/services/usuarios.service';

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styleUrls: ['./usuarios.component.scss']
})
export class UsuariosComponent implements OnInit {
  usuarios: Usuario[] = [];
  cargando: boolean = false;
  error: string | null = null;

  constructor(private usuariosService: UsuariosService) { }

  ngOnInit(): void {
    this.cargarUsuarios();
  }

  cargarUsuarios(): void {
    this.cargando = true;
    this.error = null;

    this.usuariosService.obtenerUsuarios().subscribe({
      next: (data) => {
        this.usuarios = data;
        this.cargando = false;
      },
      error: (error) => {
        console.error('Error al cargar usuarios:', error);
        this.error = 'Error al cargar los usuarios. Por favor, intenta de nuevo.';
        this.cargando = false;
      }
    });
  }

  recargarUsuarios(): void {
    this.usuarios = [];
    this.cargarUsuarios();
  }

  // Método para optimizar el rendimiento de ngFor
  trackByUserId(index: number, usuario: Usuario): number {
    return usuario.id;
  }
}
