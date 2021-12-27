import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormmarcaComponent } from './formmarca/formmarca.component';
import { MarcaComponent } from './marca/marca.component';

const routes: Routes = [
  {
    path: '',
    component: MarcaComponent
  },
  {
    path: 'formmarca',
    component: FormmarcaComponent
  },{
    path: 'formmarca/:id',
     component: FormmarcaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MarcaRoutingModule { }
