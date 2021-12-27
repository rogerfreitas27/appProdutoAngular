import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Categoria } from '../model/categoria';
import { environment } from 'src/environments/environment';
import { UsuarioDto } from 'src/app/model/usuariodto';

@Injectable({
 // providedIn: 'root'
 providedIn: 'any'

})
export class CategoriaService {
  private readonly API = environment.API+'categoria'
 token : string=""
  
  headers = new HttpHeaders() 
  // Aqui eu tiro as aspas do token
  .append('Authorization', 'Bearer ' + localStorage.getItem('token')!.replace(/^"(.*)"$/, '$1')) 
  .append('responseType', 'text');

   
  
  
  constructor(private http: HttpClient) {

  }


  findById(id: number): Observable<Categoria> {
    
    return this.http.get<Categoria>(this.API + "/buscarPorId?id=" + id, { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.handleError))

  }


  findAll(): Observable<Categoria[]> {
    return this.http.get<Categoria[]>(this.API, { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.handleError))

  }


  save(categoria: Categoria): Observable<Categoria> {
    return this.http.post<Categoria>(this.API , categoria, { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.handleError))

  }


  update(categoria: Categoria): Observable<Categoria> {
    return this.http.put<Categoria>(this.API, categoria, { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.handleError))

  }

  delete(id: number): Observable<Categoria> {
    return this.http.delete<Categoria>(this.API + id, { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.handleError))

  }


  handleError(error: HttpErrorResponse) {

    let errorMessage = '';


    if (error.error instanceof ErrorEvent) {
      // Erro ocorreu no lado do client
      errorMessage = error.error.message;

    } else {
      // Erro ocorreu no lado do servidor
      errorMessage = `Código do erro: ${error.status}, ` + `menssagem: ${error.message}`;



    }


    console.log(error);
    return throwError(error);
  };

 
  
}



