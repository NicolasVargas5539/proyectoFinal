import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { LibrosComponent } from './biblioteca/pages/libros/libros.component';
import { LoginComponent } from './biblioteca/pages/login/login.component';
import { OrdenComponent } from './biblioteca/pages/orden/orden.component';
import { AgregarOrdenComponent } from './biblioteca/pages/agregar-orden/agregar-orden.component';
import { AgregarLibrosComponent } from './biblioteca/pages/agregar-libros/agregar-libros.component';
import { UsersComponent } from "./biblioteca/pages/users/users.component";

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'libros',
    component: LibrosComponent
  },
  {
    path: 'libros/:nombre',
    component: LibrosComponent
  },
  {
    path: 'agregar_libros',
    component: AgregarLibrosComponent
  },
  {
    path: 'orden/:id',
    component: OrdenComponent
  },
  {
    path: 'orden',
    component: OrdenComponent
  },
  {
    path: 'agregar_orden',
    component: AgregarOrdenComponent
  },
  {
    path: 'usuarios',
    component: UsersComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})

export class AppRoutiungModule { }
