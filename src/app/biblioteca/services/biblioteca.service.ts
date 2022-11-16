import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';
import { Login } from '../interfaces/login.interface';
import { Response } from '../interfaces/response.interface';

@Injectable({
  providedIn: 'root'
})
export class BibliotecaService {

  private apiUrl: string = 'https://proyecto-final-teinco.herokuapp.com/api/'

  constructor(private http: HttpClient) { }
  getUsers(termino: string) : Observable<any>{
    const url = `${this.apiUrl}${termino}`;
    return this.http.get(url)
  }

  getBooks(termino: string) : Observable<any>{
    const url = `${this.apiUrl}${termino}`;
    return this.http.get(url)
  }

  login(form:Login) : Observable<any>{
    const url = `${this.apiUrl}login`;
    return this.http.post<any>(url, form)
  }

  logOut(termino: string): Observable<any>{
    console.log("entra al service")
    const url = `${this.apiUrl}${termino}`;
    console.log(url)
    return this.http.get(url)
  }
}
