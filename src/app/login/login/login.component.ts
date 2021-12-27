import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioDto } from 'src/app/model/usuariodto';
import { AuthService } from 'src/app/shared/service/auth.service';
import { LoginService } from '../service/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formLogin!: FormGroup;
  formRecuperaLogin!: FormGroup;
  mensagem! : string ;
  usuario !: UsuarioDto;
 // usuario ! : any;

  constructor(private loginService: LoginService,private authService:AuthService, private router: Router) { }

  ngOnInit(): void {
    
    this.carregarFormularios();
  }

  onSubmit() {
   
   
   
    this.loginService.authenticate(this.formLogin.value).subscribe( usuario =>{
      this. usuario =  usuario;
      this.authService.setLocalStorage(usuario);
     this.router.navigateByUrl('/dashboard');
    },
      (error: any) => {
      
         
        this.mensagem=error.error
      });





  }



  carregarFormularios() {
    this.carregarFormLogin();
   
  }

  carregarFormLogin() {

    this.formLogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('',[Validators.required,Validators.minLength(6),Validators.maxLength(10)])

    });    

  }

  get  email() { return this.formLogin.get('email')!; }
  get senha() { return this.formLogin.get('senha')!; }

}
