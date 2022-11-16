import { Component } from '@angular/core';
import { BibliotecaService } from '../../services/biblioteca.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-auditoria',
  templateUrl: './auditoria.component.html',
  styles: [
  `
  h2{
    color: azure;
  }
  `
  ]
})
export class AuditoriaComponent {
  users: any = []

  constructor(
    private bibliotecaService: BibliotecaService,
    private router: Router
  ) {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login'])
    }
    this.getAudits()
  }

  getAudits()
  {
     this.bibliotecaService.getAudits('login-log-out-histories')
       .subscribe(users => {
          this.users = users.data;
          console.log(users.data);
       })
  }
}
