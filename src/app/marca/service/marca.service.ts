import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Marca } from '../model/marca';
import { environment } from 'src/environments/environment';

@Injectable({
  //providedIn: 'root'
  providedIn: 'any'

})
export class MarcaService {
  private readonly API = environment.API+'marca/'

  headers = new HttpHeaders() 
  // Aqui eu tiro as aspas do token
  .append('Authorization', 'Bearer ' + localStorage.getItem('token')!.replace(/^"(.*)"$/, '$1')) 
  .append('responseType', 'text');

  constructor(private http: HttpClient) { }


  findById(id: number): Observable<Marca> {
    return this.http.get<Marca>(this.API + "buscarPorId?id=" + id, { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.handleError))

  }


  findAll(): Observable<Marca[]> {
    return this.http.get<Marca[]>(this.API, { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.handleError))

  }


  save(marca: Marca): Observable<Marca> {
    return this.http.post<Marca>(this.API , marca, { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.handleError))

  }


  update(marca: Marca): Observable<Marca> {
    return this.http.put<Marca>(this.API, marca, { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.handleError))

  }

  delete(id: number): Observable<Marca> {
    return this.http.delete<Marca>(this.API + id, { headers: this.headers })
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


