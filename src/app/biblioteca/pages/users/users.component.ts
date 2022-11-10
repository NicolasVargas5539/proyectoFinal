import { Component } from '@angular/core';
import {BibliotecaService} from "../../services/biblioteca.service";
import {Datum} from "../../interfaces/users.interface";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
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
