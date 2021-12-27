import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioComponent } from './usuario/usuario.component';
import {FormUsuarioComponent } from './formusuario/formusuario.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioComponent
  } ,{
    path: 'formusuario',
    component: FormUsuarioComponent
  },{
    path: 'formusuario/:id',
     component: FormUsuarioComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsuarioRoutingModule { }
