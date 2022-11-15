import { Component } from '@angular/core';
import { BibliotecaService } from '../../services/biblioteca.service';

@Component({
  selector: 'app-libros',
  templateUrl: './libros.component.html',
  styles: [
    `
    .libros{
      padding-top: 5rem;
      height: 100vh;
      color: azure;
    }
    .card{
      cursor: pointer;
      background-color:  rgba(255, 255, 255, 0.6) !important
    }
    .card:hover{
      transition: .4s;
      background-color:  rgba(255, 255, 255, 0.8) !important;
    }
    `
  ]
})
export class LibrosComponent {

  users: any = []

  constructor(private bibliotecaService: BibliotecaService) {
    this.getBooks()
  }

  getBooks()
  {
     this.bibliotecaService.getBooks('books')
       .subscribe(users => {
         this.users = users.data;
        //  console.log(users.data);
       })
  }
}
