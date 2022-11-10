import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { LibrosComponent } from './pages/libros/libros.component';
import { AgregarLibrosComponent } from './pages/agregar-libros/agregar-libros.component';
import { LoginAuditoriaComponent } from './pages/login-auditoria/login-auditoria.component';
import { OrdenComponent } from './pages/orden/orden.component';
import { AgregarOrdenComponent } from './pages/agregar-orden/agregar-orden.component';
import { FormsModule } from '@angular/forms';
import { UsersComponent } from './pages/users/users.component';



@NgModule({
  declarations: [
    LoginComponent,
    LibrosComponent,
    AgregarLibrosComponent,
    LoginAuditoriaComponent,
    OrdenComponent,
    AgregarOrdenComponent,
    UsersComponent,
  ],
  exports: [
    LoginComponent,
    LibrosComponent,
    AgregarLibrosComponent,
    LoginAuditoriaComponent,
    OrdenComponent,
    AgregarOrdenComponent,
    UsersComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
})
export class BibliotecaModule { }
