import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CategoriaComponent } from './categoria/categoria.component';
import { FormcategoriaComponent } from './formcategoria/formcategoria.component';






const routes: Routes = [
  {
    path: '',
    component: CategoriaComponent
  },
  {
    path: 'formcategoria',
    component: FormcategoriaComponent
  },{
    path: 'formcategoria/:id',
     component: FormcategoriaComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategoriaRoutingModule { }
