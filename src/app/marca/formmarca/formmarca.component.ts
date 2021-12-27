import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { MarcaService } from '../service/marca.service';
import { Marca} from '../model/marca';


@Component({
  selector: 'app-formmarca',
  templateUrl: './formmarca.component.html',
  styleUrls: ['./formmarca.component.css']
})
export class FormmarcaComponent implements OnInit {
  formMarca!: FormGroup; 
  mensagem : string="" ;
   mensagem_suc : string="";
  title : string="";
  id!:number;
  marca! :  Marca;

  constructor(private marcaService: MarcaService, private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {

     this.route.params.subscribe(params => {
     
        if (params.id) {
		this.id = params.id;
        this.title="Alterar Marca";
		this.carregarMarca(this.id);
		 this.carregarFormMarca();
        }else{
		
        this.title="Cadastrar Marca";
       this.carregarFormMarca(); 
             }
        }); 



   
  }


  onSubmit() {

  this.marcaService.save(this.formMarca.value).subscribe( suc => {
    alert("Cadastro realizado com sucesso !")
      //this.router.navigateByUrl('/marca');
    },
      (error: any) => {
      
         if(error.status ==400){
		  this.mensagem=error.error;;
		  }else{
		  this.mensagem = error.error;
		  }
      });





  }



  carregarFormMarca() {

    this.formMarca = new FormGroup({
      id: new FormControl('',[]),
     nome: new FormControl('',[Validators.required,Validators.minLength(3),Validators.maxLength(60)])

    }); 
  }

  get nome() { return this.formMarca.get('nome')!; }
  
  
  carregarMarca(id:number){
 
  this.marcaService.findById(id).subscribe( marca =>{
    this. marca =  marca;
	this.setarFormulario(this.marca);
    
  },
    (error: any) => {
    
       console.log(error.error);
      this.mensagem=error.error
     
    });


  
  }
  
  
  setarFormulario(marca : Marca){
  this.formMarca.patchValue({
    id:marca.id,  
    nome: marca.nome	
    
	});
  }
  
  
}


