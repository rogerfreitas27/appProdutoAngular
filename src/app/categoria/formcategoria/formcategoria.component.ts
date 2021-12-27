import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { CategoriaService } from '../service/categoria.service';
import { Categoria } from '../model/categoria';

@Component({
  selector: 'app-formcategoria',
  templateUrl: './formcategoria.component.html',
  styleUrls: ['./formcategoria.component.css']
})
export class FormcategoriaComponent implements OnInit {
  formCategoria!: FormGroup; 
  mensagem : string ="";
  mensagem_suc : string="";
  title : string="";
  id!:number;
  categoria! :  Categoria;

  constructor(private categoriaService: CategoriaService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe(params => {
     
        if (params.id) {
		this.id = params.id;
        this.title="Alterar Categoria";
		this.carregarCategoria(this.id);
		this.carregarFormCategoria(); 
        }else{
		
        this.title="Cadastrar Categoria";
        this.carregarFormCategoria(); 
             }
        }); 
    
	
	}

    



  onSubmit() {
   


    this.categoriaService.save(this.formCategoria.value).subscribe( suc => {
      //this.mensagem_suc =
    },
      (error: any) => {
      
          if(error.status ==400){
		  this.mensagem="Nome inválido, o campo nome é unico";
		  }else{
		  this.mensagem = error.error;
		  }
		  
       
      });





  }




  carregarFormCategoria() {

    this.formCategoria = new FormGroup({
     id: new FormControl('',[]),
     nome: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(60)])
	

    }); 
  }

  get nome() { return this.formCategoria.get('nome')!; }
  
  
  carregarCategoria(id:number){
 
  this.categoriaService.findById(id).subscribe( categoria =>{
    this. categoria =  categoria;
	this.setarFormulario(this.categoria);
    
  },
    (error: any) => {
    
       console.log(error.error);
      this.mensagem=error.error
     
    });


  
  }
  
  
  setarFormulario(categoria : Categoria){
  this.formCategoria.patchValue({
    id:categoria.id,  
    nome: categoria.nome	
    
	});
  }
  
  
  
  
}



