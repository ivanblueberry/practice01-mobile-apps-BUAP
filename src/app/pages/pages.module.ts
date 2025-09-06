import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { PagesRoutingModule } from './pages-routing.module';
import { HomeComponent } from './home/home.component';
import { PerfilComponent } from './perfil/perfil.component';
import { EstructurasComponent } from './estructuras/estructuras.component';
import { DocumentacionComponent } from './documentacion/documentacion.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

@NgModule({
  declarations: [
    HomeComponent,
    PerfilComponent,
    EstructurasComponent,
    DocumentacionComponent,
    UsuariosComponent,
  ],
  imports: [CommonModule, PagesRoutingModule, HttpClientModule],
})
export class PagesModule {}
