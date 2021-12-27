import { Component, OnInit } from '@angular/core';
import { Produto } from '../model/produto';
import { ProdutoService } from '../service/produto.service';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  
  dtOptions: DataTables.Settings = {};
  dtTrigger: Subject<any> = new Subject<any>();
  produtos:Produto []=[];
  mensagem : string ="";

  ngOnInit(): void {
    this.carregarProdutos();
    this.dtOptions = {
     pagingType: 'full_numbers'
   };
  }
  constructor(private produtoService : ProdutoService) { }


  carregarProdutos(){
    this.produtoService.findAll().subscribe( produtos =>{
      this. produtos =  produtos;
      this.dtTrigger.next();
    },
      (error: any) => {
      
         console.log(error.error);
        this.mensagem=error.error
        this.dtTrigger.next();
      });
  
  }

}
