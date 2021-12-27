import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { Privilegio } from 'src/app/model/privilegio';
import { Roles } from 'src/app/model/roles';
import { UsuarioService } from '../service/usuario.service';
import { UsuarioDto } from 'src/app/model/usuariodto';
@Component({
  selector: 'app-usuarioform',
  templateUrl: './formusuario.component.html',
  styleUrls: ['./formusuario.component.css']
})
export class FormUsuarioComponent implements OnInit {
  formUsuario!: FormGroup; 
  mensagem! : string ;
  privilegios : Privilegio[]=[];
  roles:Roles[]=[];
  title : string="";
  cod!:number;
  usuariodto! : UsuarioDto;

  constructor(private usuarioService: UsuarioService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
     
        if (params.id) {
		this.cod = params.id;
        this.title="Alterar Usuario";
		this.carregarUsuario(this.cod);
		 this.carregarRoles();
        this.carregarPrivilegios();
		this.carregarFormUsuario(); 
        }else{
		
        this.title="Cadastrar Usuario";
        this.carregarRoles();
        this.carregarPrivilegios();
       this.carregarFormUsuario();
             }
        }); 

   
  }



  onSubmit() {

    this.usuarioService.save(this.formUsuario.value).subscribe( suc => {
      this.mensagem ="Cadastro realizado com sucesso !";
        this.router.navigateByUrl('/produto');
      },
        (error: any) => {
        
            console.log(error.statusText)
          this.mensagem=error.statusText
        
        });
  
  
  
  
  
    }


  carregarPrivilegios(){
    this.usuarioService.findAllPrivilegio()
    .subscribe(privilegios =>{
      this.privilegios = privilegios;
    
  
    }, (error: any) => {
console.log(error)
      this.mensagem=error.statusText   
     
     }
    );
  }


  carregarRoles(){
    this.usuarioService.findAllRoles()
    .subscribe(roles =>{
      this.roles = roles;
    
  
    }, (error: any) => {
console.log("dashboard components")
      this.mensagem=error.statusText   
     
     }
    );
  }



  carregarFormUsuario() {

    this.formUsuario = new FormGroup({
     id: new FormControl('',[]),
     nome: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z]*'),
                               Validators.minLength(3), Validators.maxLength(60)]),
    email: new FormControl('',[ Validators.email,Validators.required, Validators.minLength(5), Validators.maxLength(60)]),
    senha: new FormControl('',[Validators.required,Validators.minLength(6), Validators.maxLength(10)]),    
     CATEGORIA_READ_PRIVILEGE : new FormControl('',[Validators.required]),
     CATEGORIA_WRITE_PRIVILEGE: new FormControl('',[Validators.required]),
     CATEGORIA_DELETE_PRIVILEGE: new FormControl('',[Validators.required]),
     MARCA_READ_PRIVILEGE : new FormControl('',[Validators.required]),
     MARCA_WRITE_PRIVILEGE: new FormControl('',[Validators.required]),
     MARCA_DELETE_PRIVILEGE: new FormControl('',[Validators.required]),
     PRODUTO_READ_PRIVILEGE : new FormControl('',[Validators.required]),
     PRODUTO_WRITE_PRIVILEGE: new FormControl('',[Validators.required]),
     PRODUTO_DELETE_PRIVILEGE: new FormControl('',[Validators.required]),
     USUARIO_READ_PRIVILEGE : new FormControl('',[Validators.required]),
     USUARIO_WRITE_PRIVILEGE: new FormControl('',[Validators.required]),
     USUARIO_DELETE_PRIVILEGE: new FormControl('',[Validators.required]),
	 role: new FormControl('',[Validators.required])
    
     

    }); 
  }

  get id() { return this.formUsuario.get('id')!; }
  get nome() { return this.formUsuario.get('nome')!; }
  get email() { return this.formUsuario.get('email')!; }
  get senha() { return this.formUsuario.get('senha')!; }
  get CATEGORIA_READ_PRIVILEGE() { return this.formUsuario.get('CATEGORIA_READ_PRIVILEGE')!; }
  get CATEGORIA_WRITE_PRIVILEGE() { return this.formUsuario.get('CATEGORIA_WRITE_PRIVILEGE')!; }
  get CATEGORIA_DELETE_PRIVILEGE() { return this.formUsuario.get('CATEGORIA_DELETE_PRIVILEGE')!; }
  get MARCA_READ_PRIVILEGE() { return this.formUsuario.get('MARCA_READ_PRIVILEGE')!; }
  get MARCA_WRITE_PRIVILEGE() { return this.formUsuario.get('MARCA_WRITE_PRIVILEGE')!; }
  get MARCA_DELETE_PRIVILEGE() { return this.formUsuario.get('MARCA_DELETE_PRIVILEGE')!; }
  get PRODUTO_READ_PRIVILEGE() { return this.formUsuario.get('PRODUTO_READ_PRIVILEGE')!; }
  get PRODUTO_WRITE_PRIVILEGE() { return this.formUsuario.get('PRODUTO_WRITE_PRIVILEGE')!; }
  get PRODUTO_DELETE_PRIVILEGE() { return this.formUsuario.get('PRODUTO_DELETE_PRIVILEGE')!; }
  get USUARIO_READ_PRIVILEGE() { return this.formUsuario.get('USUARIO_READ_PRIVILEGE')!; }
  get USUARIO_WRITE_PRIVILEGE() { return this.formUsuario.get('USUARIO_WRITE_PRIVILEGE')!; }
  get USUARIO_DELETE_PRIVILEGE() { return this.formUsuario.get('USUARIO_DELETE_PRIVILEGE')!; }
  get role() { return this.formUsuario.get('role')!; }
  

   carregarUsuario(cod:number){
   
   this.usuarioService.findById(cod).subscribe(usuariodto =>{
    this.   usuariodto =    usuariodto;
	this.setarFormulario(this.usuariodto);
    
  },
    (error: any) => {
    
       console.log(error.error);
      this.mensagem=error.error
     
    });
   }
   
   
   
   setarFormulario(u : UsuarioDto){    
  
  
  
   
   
  this.formUsuario.patchValue({
    id:u.id,  
    nome: u.nome,
    email: u.email,
	 CATEGORIA_READ_PRIVILEGE: this.converteNomeFormcontrol('CATEGORIA_READ_PRIVILEGE',u.privilegios),
     CATEGORIA_WRITE_PRIVILEGE:this.converteNomeFormcontrol('CATEGORIA_WRITE_PRIVILEGE',u.privilegios),	
     CATEGORIA_DELETE_PRIVILEGE:this.converteNomeFormcontrol('CATEGORIA_DELETE_PRIVILEGE',u.privilegios),	 
     MARCA_READ_PRIVILEGE :this.converteNomeFormcontrol('MARCA_READ_PRIVILEGE',u.privilegios),
     MARCA_WRITE_PRIVILEGE: this.converteNomeFormcontrol('MARCA_WRITE_PRIVILEGE',u.privilegios),
     MARCA_DELETE_PRIVILEGE:this.converteNomeFormcontrol('MARCA_DELETE_PRIVILEGE',u.privilegios) ,
     PRODUTO_READ_PRIVILEGE :this.converteNomeFormcontrol('PRODUTO_READ_PRIVILEGE',u.privilegios) ,
     PRODUTO_WRITE_PRIVILEGE:this.converteNomeFormcontrol('PRODUTO_WRITE_PRIVILEGE',u.privilegios),
     PRODUTO_DELETE_PRIVILEGE:this.converteNomeFormcontrol('PRODUTO_DELETE_PRIVILEGE',u.privilegios),
     USUARIO_READ_PRIVILEGE :this.converteNomeFormcontrol('USUARIO_READ_PRIVILEGE',u.privilegios) ,
     USUARIO_WRITE_PRIVILEGE:this.converteNomeFormcontrol('USUARIO_WRITE_PRIVILEGE',u.privilegios) ,
     USUARIO_DELETE_PRIVILEGE:this.converteNomeFormcontrol('USUARIO_DELETE_PRIVILEGE',u.privilegios),
	  role:u.role.id
    
	});
	
	
	
  }
  
  
  // Aqui eu devolvo a string com a permissão
  converteNomeFormcontrol(nome :string,privilegios : Privilegio[]){
 
   var n ="";   
   for(let i = 0; i <= privilegios.length ; i++){
   if(privilegios[i]?.nome === nome){
  
   return privilegios[i]?.id;
   }
  
   
   }
   
 return n;

}

}