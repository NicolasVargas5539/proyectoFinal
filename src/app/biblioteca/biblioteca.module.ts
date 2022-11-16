import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { LoginComponent } from './pages/login/login.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { AgregarLibrosComponent } from './pages/agregar-libros/agregar-libros.component';
import { OrdenComponent } from './pages/orden/orden.component';
import { AgregarOrdenComponent } from './pages/agregar-orden/agregar-orden.component';
import { UsersComponent } from './pages/users/users.component';
import { AppRoutiungModule } from '../app-routing.module';
import { AuditoriaComponent } from './pages/auditoria/auditoria.component';



@NgModule({
  declarations: [
    LoginComponent,
    LibrosComponent,
    AgregarLibrosComponent,
    OrdenComponent,
    AgregarOrdenComponent,
    UsersComponent,
    AuditoriaComponent,
  ],
  exports: [
    LoginComponent,
    LibrosComponent,
    AgregarLibrosComponent,
    OrdenComponent,
    AgregarOrdenComponent,
    UsersComponent,
    AuditoriaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutiungModule
  ],
})
export class BibliotecaModule { }
