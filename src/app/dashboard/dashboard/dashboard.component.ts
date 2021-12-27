import { Component, OnInit } from '@angular/core';
import { UsuarioDto } from 'src/app/model/usuariodto';
import { FormBuilder,FormGroup, FormControl,Validators } from '@angular/forms';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  formDashboard!: FormGroup;
usuario! : UsuarioDto;
qtd_categoria : number = 0;
qtd_marca : number = 0;
qtd_produto : number = 0;
qtd_usuario : number = 0;

  constructor() { }

  ngOnInit(): void {
  
    this.carregarFormDashboard();
    this.carregarDashboard();
  }

  carregarDashboard(){

this.usuario= JSON.parse(localStorage.getItem('dados')!);


this.qtd_categoria  = this.usuario.quantidade_categoria;
this.qtd_marca  = this.usuario.quantidade_marca;
this.qtd_produto  = this.usuario.quantidade_produto;
this.qtd_usuario   = this.usuario.quantidade_usuario;
this.setarFormulario(this.usuario);

  }

  carregarFormDashboard() {

   


    this.formDashboard = new FormGroup({
      id: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('',[Validators.minLength(6),Validators.maxLength(10)])

    });    

  }

  get  id() {return this.formDashboard.get('id')!;} 
  get  email() {return this.formDashboard.get('email')!;}   
  get senha() { return this.formDashboard.get('senha')!; }


  setarFormulario(usuario :  UsuarioDto) {
   console.log("id->"+ usuario.id)
    this.formDashboard.patchValue({
    id:usuario.id,  
    email: usuario.email,
    senha :''});
    //this.formDashboard.setValue({email: usuario.email});
}



  onSubmit() {
   
    





  }

}
