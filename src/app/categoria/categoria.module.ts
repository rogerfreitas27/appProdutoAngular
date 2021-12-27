import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriaRoutingModule } from './categoria-routing.module';
import { CategoriaComponent } from './categoria/categoria.component';
import { FormcategoriaComponent } from './formcategoria/formcategoria.component';
import { ComponentsModule } from '../shared/components/components.module';
import { SharedModule } from '../shared/components/shared.module';
import { CategoriaService } from './service/categoria.service';





@NgModule({
  declarations: [
    CategoriaComponent,
    FormcategoriaComponent
  ],
  imports: [
    CommonModule,
    CategoriaRoutingModule,
    ComponentsModule,
    SharedModule   
  ]
  ,  
 providers: [CategoriaService]
 
})
export class CategoriaModule { }
