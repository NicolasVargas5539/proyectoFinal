import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: [
    `
    .login{
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
      font-size: 24px;
      font-weight: 400;
      color: white;
    }
    h1, h2, h3, h4, h5, h6, label{
      color: white;
    }
    input{
      border: 1px solid rgb(90, 90, 90);
      background-color: rgba(31, 31, 31, 0.394);
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

  correo: string = '';
  // clave: string = '';


  constructor() { }

  buscar(){
    console.log(this.correo);
    // console.log(this.clave);
  }
}
