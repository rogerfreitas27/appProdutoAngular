import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Produto } from '../model/produto'; 
import { environment } from 'src/environments/environment';

@Injectable({
 // providedIn: 'root'
 providedIn: 'any'

})
export class ProdutoService {
  private readonly API = environment.API+'produto/'

  headers = new HttpHeaders() 
  // Aqui eu tiro as aspas do token
  .append('Authorization', 'Bearer ' + localStorage.getItem('token')!.replace(/^"(.*)"$/, '$1')) 
  .append('responseType', 'text');

  constructor(private http: HttpClient) { }


  findById(id: number): Observable<Produto> {
    return this.http.get<Produto>(this.API + "buscarPorId?id=" + id, { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.handleError))

  }
  
  
  
  
  
  findByNome(nome: string): Observable<Produto> {
    return this.http.get<Produto>(this.API + "buscarPorNome?nome=" + nome, { headers: this.headers })
      .pipe(
        retry(1),
        catchError(this.handleError))

  }


  findAll(): Observable<Produto[]> {
    return this.http.get<Produto[]>(this.API, { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.handleError))

  }


  save(produto: any): Observable<any> {
    return this.http.post<any>(this.API , produto, { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.handleError))

  }


  update(produto: Produto): Observable<Produto> {
    return this.http.put<Produto>(this.API, produto, { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.handleError))

  }

  delete(id: number): Observable<Produto> {
    return this.http.delete<Produto>(this.API + id, { headers: this.headers })
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


