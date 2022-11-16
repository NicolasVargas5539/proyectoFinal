import { Component } from '@angular/core';
import {ToastrService} from "ngx-toastr";
import {Router} from "@angular/router";
import {BibliotecaService} from "../../biblioteca/services/biblioteca.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styles: [
    `
    li{
      cursor: pointer;
    }
    .container-fluid{
      background-color: rgba(18, 18, 18, 0.8);
    }
    .nav-link{
      color:  rgb(112, 112, 112);
    }
    .active{
      color: rgb(188, 188, 188) !important;
      font-weight: 700;
    }
    .navbar-brand{
      color: rgb(188, 188, 188) !important;
      font-weight: 700;
    }

    @media(max-width:770px) {
      .container-fluid{
        background-color: rgb(18, 18, 18);
      }
}
    `
  ]
})
export class SidebarComponent{

  token: any = ''

  constructor(
    private toastService: ToastrService,
    private router: Router,
    private bibliotecaService: BibliotecaService
  ) {
    this.token = localStorage.getItem('token')
  }

  logOut = () => {
    console.log(`logout/${localStorage.getItem('id')}`)
    this.bibliotecaService.logOut(`logout/${localStorage.getItem('id')}`)
      .subscribe(response => {
        console.log(response)
      })
    this.token = ''
    localStorage.removeItem('token')
    this.toastService.info("adios", "Libreria")
    setTimeout(() => {
      this.router.navigate(['/login'])
    }, 1500)
  }

}
