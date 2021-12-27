import { Component, OnInit } from '@angular/core';
import { Marca } from '../model/marca';
import { MarcaService } from '../service/marca.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-marca',
  templateUrl: './marca.component.html',
  styleUrls: ['./marca.component.css']
})
export class MarcaComponent implements OnInit {
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  marcas:Marca []=[];
  mensagem : string ="";

  ngOnInit(): void {
    this.carregarMarcas()
    this.dtOptions = {
     pagingType: 'full_numbers'
   };
  }
  constructor(private marcaService : MarcaService) { }


  carregarMarcas(){
    this.marcaService.findAll().subscribe( marcas =>{
      this. marcas =  marcas;
      this.dtTrigger.next();
    },
      (error: any) => {
      
         console.log(error.error);
        this.mensagem=error.error
        this.dtTrigger.next();
      });
  
  }

 

}
