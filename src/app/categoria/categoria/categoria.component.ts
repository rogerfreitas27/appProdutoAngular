import { Component, OnInit } from '@angular/core';
import { Categoria } from '../model/categoria';
import { CategoriaService } from '../service/categoria.service';
import { Subject } from 'rxjs';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit {


  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  categorias:Categoria []=[];
  mensagem : string ="";

  ngOnInit(): void {
    this.carregarCategorias();
    this.dtOptions = {
     pagingType: 'full_numbers'
   };
  }
  constructor(private categoriaService : CategoriaService) { }



carregarCategorias(){
  this.categoriaService.findAll().subscribe( categorias =>{
    this. categorias =  categorias;
    this.dtTrigger.next();
  },
    (error: any) => {
    
       console.log(error.error);
      this.mensagem=error.error
      this.dtTrigger.next();
    });

}

}
