import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UsuarioDto } from 'src/app/model/usuariodto';
import { Privilegio } from 'src/app/model/privilegio';
import { Roles } from 'src/app/model/roles';

@Injectable({
  //providedIn: 'root'
  providedIn: 'any'

})
export class UsuarioService {
  private readonly API = environment.API+'usuario/'

  headers = new HttpHeaders() 
  // Aqui eu tiro as aspas do token
  .append('Authorization', 'Bearer ' + localStorage.getItem('token')!.replace(/^"(.*)"$/, '$1')) 
  .append('responseType', 'text');

  constructor(private http: HttpClient) { }


  findById(id: number): Observable<UsuarioDto> {
    return this.http.get<UsuarioDto>(this.API + "buscarPorId?id=" + id, { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.handleError))

  }


  findAll(): Observable<UsuarioDto[]> {
    return this.http.get<UsuarioDto[]>(this.API, { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.handleError))

  }


  save(usuario: UsuarioDto): Observable<UsuarioDto> {
    return this.http.post<UsuarioDto>(this.API ,usuario, { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.handleError))

  }


  update(usuario: UsuarioDto): Observable<UsuarioDto> {
    return this.http.put<UsuarioDto>(this.API,usuario, { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.handleError))

  }

  delete(id: number): Observable<UsuarioDto> {
    return this.http.delete<UsuarioDto>(this.API + id, { headers: this.headers })
      .pipe(
        retry(2),
        catchError(this.handleError))

  }
///////////////////////////////////////// Preferi deixar aqui - inicio /////////////////////////////////////////////////////////////////

  findAllPrivilegio(): Observable<Privilegio[]> {
    return this.http.get<Privilegio[]>(environment.API+'privilegio/', { headers: this.headers })
      .pipe(
        retry(1),
        catchError(this.handleError))

  }

  findAllRoles(): Observable<Roles[]> {
    return this.http.get<Roles[]>(environment.API+'role/', { headers: this.headers })
      .pipe(
        retry(1),
        catchError(this.handleError))

  }
/////////////////////////////////////////////////////  fim //////////////////////////////////////////////////////////////////

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




