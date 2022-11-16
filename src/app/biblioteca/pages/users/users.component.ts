import { Component } from '@angular/core';
import {BibliotecaService} from "../../services/biblioteca.service";
import {Router} from "@angular/router";


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styles: [`
  .users{
    height: 100vh;
    color: white;
  }

  `
  ]
})
export class UsersComponent {

  users: any = []

  constructor(
    private bibliotecaService: BibliotecaService,
    private router: Router
  ) {
    if (!localStorage.getItem('token')) {
      this.router.navigate(['/login'])
    }
    this.getUsers()
  }

  getUsers()
  {
     this.bibliotecaService.getUsers('users')
       .subscribe(users => {
         this.users = users.data;
        //  console.log(users.data);
       })
  }
}
