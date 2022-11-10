import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import {Datum} from "../interfaces/users.interface";

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  private apiUrl: string = 'https://proyecto-final-teinco.herokuapp.com/api/'

  constructor(private http: HttpClient) { }

  buscarUsuario(termino: string) : Observable<any>{
    // const url = `${this.apiUrl}/name/${termino}`;
    const url = `${this.apiUrl}${termino}`;
    return this.http.get(url)
  }
  getUsers(termino: string) : Observable<any>{
    // const url = `${this.apiUrl}/name/${termino}`;
    const url = `${this.apiUrl}${termino}`;
    return this.http.get(url)
  }
}
