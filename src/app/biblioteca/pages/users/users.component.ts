import { Component } from '@angular/core';
import {BibliotecaService} from "../../services/biblioteca.service";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [`
  .users{
    height: 100vh;
  }
  `
  ]
})
export class UsersComponent {

  users: any = []

  constructor(private bibliotecaService: BibliotecaService) {
    this.getUsers()
  }

  getUsers()
  {
     this.bibliotecaService.getUsers('users')
       .subscribe(users => {
         this.users = users.data
       })
  }

}
