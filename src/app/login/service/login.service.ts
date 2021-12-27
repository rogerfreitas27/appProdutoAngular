import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UsuarioDto } from 'src/app/model/usuariodto';


@Injectable({
  providedIn: 'root'
})
export class LoginService {

 
 private readonly API = environment.API+'usuario/'
 

constructor(private http: HttpClient) { }

  authenticate(dados: UsuarioDto): Observable< UsuarioDto> {  
    
    localStorage.removeItem('dados'); // Estou limpando o token antes de fazer login
    localStorage.removeItem('token');
   
    return this.http.post<UsuarioDto>(this.API+'autenticar', dados)
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


