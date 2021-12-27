import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { UsuarioDto } from 'src/app/model/usuariodto';


@Injectable({
  providedIn: 'any'
})
export class AuthService {

 constructor(private router: Router){}

  public clear():void{
    localStorage.removeItem('token');
    localStorage.removeItem('dados');
    this.router.navigateByUrl('/login');
  }


  public isAuthenticated():boolean{
    let dados = localStorage.getItem('dados'); 
  if(dados == "" || dados ==null){
    return false
  }else{
    return true
  }
    
  }

  public setLocalStorage(dados:UsuarioDto){
    
    localStorage.setItem('dados', JSON.stringify(dados));
    localStorage.setItem('token', JSON.stringify(dados.token));
    
  }
}
