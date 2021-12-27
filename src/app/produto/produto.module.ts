import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProdutoRoutingModule } from './produto-routing.module';
import { ProdutoComponent } from './produto/produto.component';
import { FormprodutoComponent } from './formproduto/formproduto.component';
import { ComponentsModule } from '../shared/components/components.module';
import { SharedModule } from '../shared/components/shared.module';
import { ProdutoService } from './service/produto.service';
import { CategoriaService } from '../categoria/service/categoria.service';
import { MarcaService } from '../marca/service/marca.service';


@NgModule({
  declarations: [
    ProdutoComponent,
    FormprodutoComponent
  ],
  imports: [
    CommonModule,
    ProdutoRoutingModule,
    ComponentsModule,
    SharedModule   
  ],
  providers : [ProdutoService,CategoriaService,MarcaService]
})
export class ProdutoModule { }
