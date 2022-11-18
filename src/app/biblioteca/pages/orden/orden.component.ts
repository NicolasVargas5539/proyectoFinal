import { Component } from '@angular/core';
import { BibliotecaService } from '../../services/biblioteca.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styles: [
    `
    .orden{
      height: 100vh;
      padding-top: 5rem;
    }
    .ordenes{
      height: 70vh !important;
      color: azure;
    }
    h1, hr{
      color:azure;
    }
    `
  ]
})
export class OrdenComponent {

  users: any = []

  constructor(private bibliotecaService: BibliotecaService) {
    this.getBooks()
  }

  getBooks() {
    this.bibliotecaService.getBooks('books')
      .subscribe(users => {
        this.users = users.data;
        //  console.log(users.data);
      })
  }
}
