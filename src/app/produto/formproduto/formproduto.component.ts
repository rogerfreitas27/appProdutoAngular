import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl,Validators } from '@angular/forms';
import { Router,ActivatedRoute } from '@angular/router';
import { ProdutoService } from '../service/produto.service';
import { Marca } from '../../marca/model/marca';
import { Categoria } from '../../categoria/model/categoria';
import { MarcaService } from '../../marca/service/marca.service';
import { CategoriaService } from '../../categoria/service/categoria.service';
import { Produto } from '../model/produto';

import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';


@Component({
  selector: 'app-formproduto',
  templateUrl: './formproduto.component.html',
  styleUrls: ['./formproduto.component.css']
})
export class FormprodutoComponent implements OnInit {
  formProduto!: FormGroup; 
  mensagem! : string ;
  marcas : Marca[]=[];
 categorias : Categoria[]=[];
 produto! : Produto  ;
   mensagem_success : string="";
  title : string="";
  id!:number;
  img: string ="";
  imageURL!: string;

  constructor(private produtoService: ProdutoService,private categoriaService: CategoriaService,
    private marcaService : MarcaService,private router: Router,private route: ActivatedRoute
	) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
     
        if (params.id) {
		this.id = params.id;
        this.title="Alterar Produto";
		this.carregarProduto(this.id);
	    this.carregarCategoria();
		this.carregarMarca();
        this.carregarFormProduto();
        }else{
		
        this.title="Cadastrar Produto";
        this.carregarCategoria();
		this.carregarMarca();
        this.carregarFormProduto();
             }
        });
  }

  onSubmit() {
  var foto;
 let element: HTMLElement | null = document.getElementById('img');
if ( element as HTMLInputElement ) {
   
	foto = (element as HTMLInputElement)!.files![0];
}  
  //var foto = img.target.files[0];
  var formData = new FormData();
  
  
  formData.append("produtoJson", JSON.stringify(this.formProduto.value));
  formData.append("foto", foto as Blob);

    this.produtoService.save(formData).subscribe( suc => {
      alert("Cadastro realizado com sucesso !")
        this.router.navigateByUrl('/produto');
      },
        (error: any) => {
        
            console.log(error.statusText)
          this.mensagem=error.statusText
        
        });
  
  
  
  
  
    }


    carregarCategoria(){
      
      this.categoriaService.findAll()
      .subscribe(categorias =>{
        this.categorias = categorias;
       
    
      }, (error: any) => {
  console.log("dashboard components")
        if(error){
          console.log(error)
        }   
       
       }
      );
     


    }
  
   
    carregarMarca(){
      this.marcaService.findAll()
      .subscribe(marcas =>{
        this.marcas = marcas;
       
    
      }, (error: any) => {
  console.log("dashboard components")
        this.mensagem=error.statusText   
       
       }
      );
    }
  
  

  carregarFormProduto() {

    this.formProduto = new FormGroup({
    
	
	 id: new FormControl('',[]),
     nome: new FormControl('',[Validators.required,Validators.minLength(3), Validators.maxLength(60)]),
     descricao: new FormControl('',[Validators.required, Validators.minLength(3),Validators.maxLength(60)]),
     valor: new FormControl('',[Validators.required]),
     quantidade: new FormControl('',[Validators.required]),
     url_imagem: new FormControl('',[Validators.required]),	 
     categoria: new FormControl('',[Validators.required]),
     marca: new FormControl('',[Validators.required])
     

    }); 
  }

  get nome() { return this.formProduto.get('nome')!; }
  get descricao() { return this.formProduto.get('descricao')!; }
  get valor() { return this.formProduto.get('valor')!; }
  get quantidade() { return this.formProduto.get('quantidade')!; }
  get url_imagem() { return this.formProduto.get('url_imagem')!; }
  get categoria() { return this.formProduto.get('categoria')!; }
  get marca() { return this.formProduto.get('marca')!; }
  
  
  
  carregarProduto(id:number){
 
  this.produtoService.findById(id).subscribe( produto =>{
    this.produto =   produto;
	this.setarFormulario(this.produto);
    
  },
    (error: any) => {
    
       console.log(error.error);
      this.mensagem=error.error
     
    });


  
  }
  
  
  setarFormulario( produto : Produto){
    this.img = produto.url_imagem;
	this.imageURL = produto.url_imagem;
	console.log(produto.idCategoria.id)
	console.log(produto);
	this.formProduto.patchValue({
    id: produto.id,  
    nome: produto.nome,		
	descricao: produto.descricao,
    valor: produto.valor.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' }),
    quantidade: produto.quantidade,
    categoria: produto.idCategoria.id,        
    marca: produto.idMarca.id,
	url_imagem: produto.url_imagem
	  
    
	});
  }
  
  
  // Aqui é para fazer o upload da imagem e setar no formulario
  showPreview(e : Event) {
      //Se houver arquivo eu carrego
	if((e.target as HTMLInputElement)!.files![0]){
	const file = (e.target as HTMLInputElement)!.files![0];
	this.formProduto.patchValue({
      url_imagem: file
    });
	
	this.formProduto.get('url_imagem')!.updateValueAndValidity()

    // File Preview
      const reader = new FileReader();
      reader.onload = () => {
	  this.img = reader.result as string;
     
      }
      reader.readAsDataURL(file)
	  
	}else{
	//Quando eu clico em cancelar o upload  eu seto a imagem que vem do banco
	this.img = "";
	this.img=this.imageURL;
	}
    
  
  }
  
  
  
  buscarPorNome(nome: string){
  
  this.produtoService.findByNome(nome).subscribe( produto =>{
     this.mensagem="Já existe um produto cadastrado com este nome";
    
  },
    (error: any) => {
   
       console.log(error.error);
      this.mensagem=error.error
     
    });
	
  
  }
  
  /*
  aguarde(){
  
  this.formProduto.patchValue({
     
    nome: "Aguarde...",		
	descricao: "Aguarde...",
    valor: "Aguarde...",
    quantidade: "Aguarde...",
    categoria: "Aguarde...",        
    marca: "Aguarde...",
	
	  
    
	});
  
  }
  */
  
  limparFormulario(){
  this.formProduto.reset();
  }
  
  
  
}


