import { Component } from '@angular/core';
import { BibliotecaService } from '../../services/biblioteca.service';
import { Datum } from '../../interfaces/users.interface';

@Component({
  selector: 'app-login-auditoria',
  templateUrl: './login-auditoria.component.html',
  styles: [
  ]
})
export class LoginAuditoriaComponent {

  termino: string = 'users';
  usuarios: Datum[] = [];

  constructor( private bibliotecaService: BibliotecaService) { }

  buscar(){
    console.log(this.termino);

    this.bibliotecaService.buscarUsuario(this.termino)
    .subscribe(user => {
      console.log(user);
      // console.log(user.data)
      this.usuarios =  user;
      // console.log(this.usuarios)
    });
  }
}
