import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormprodutoComponent } from './formproduto/formproduto.component';
import { ProdutoComponent } from './produto/produto.component';

const routes: Routes = [
  {
    path: '',
    component: ProdutoComponent
  },
  {
    path: 'formproduto',
    component: FormprodutoComponent
  },{
    path: 'formproduto/:id',
     component: FormprodutoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProdutoRoutingModule { }
