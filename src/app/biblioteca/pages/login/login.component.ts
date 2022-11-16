import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { BibliotecaService } from '../../services/biblioteca.service';
import { Login } from '../../interfaces/login.interface';
import {ToastrService} from "ngx-toastr";
import {Router, RouterLink} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
    .login{
      padding-top: 4rem;
      height: 100vh
    }
    .logo-login{
      margin: auto;
      width: 10rem;
      height: 10rem;
      background-image: url('../../img/login.jpg');
      background-size: 140%;
      background-repeat: no-repeat;
      border-radius: 50%;
    }
    .container-logo{
      border: 1px solid rgb(60, 60, 60);
      border-radius: 5%;
      box-shadow: 10px 10px 20px rgba(10, 10, 10, 0.8);
      background-color: rgba(31, 31, 31, 0.794);
    }
    p{
      font-size: 20px;
      font-weight: 400;
      color: white;
    }
    h1, h2, h3, h4, h5, h6, label{
      color: white;
    }
    input{
      border: 1px solid rgb(90, 90, 90);
      background-color: rgba(31, 31, 31, 0.394);
      color: azure;
    }
    .form-control:active{
      background-color: rgb(83, 83, 83);
    }
    .form-control:hover{
      background-color: rgba(83, 83, 83, 0.2);
    }
    .form-control:focus{
      background-color: rgba(83, 83, 83, 0.5);
      color: azure;
    }

    `
  ]
})
export class LoginComponent {

  loginForm = new FormGroup({
    email: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  constructor(
    private bibliotecaService: BibliotecaService,
    private toastService: ToastrService,
    private router: Router
  ) {
    if (localStorage.getItem('token')) {
      this.router.navigate(['/usuarios'])
    }
  }

  onLogin(form: Login){
    this.bibliotecaService.login(form).subscribe(response =>{
      this.toastService.success("Bienvenido", "Libreria");
      setTimeout(() => {
        localStorage.setItem('token', response.data.token);
        this.router.navigate(['/usuarios'])
        location.reload()
      }, 1500)
    }, error => {
      if (400 === error.status) {
        this.toastService.error("usuario y/o contraseña incorrectos", "Libreria")
      }
    })
  }
}
