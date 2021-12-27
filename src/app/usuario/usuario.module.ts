import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsuarioRoutingModule } from './usuario-routing.module';
import { UsuarioComponent } from './usuario/usuario.component';
import { ComponentsModule } from '../shared/components/components.module';
import { SharedModule } from '../shared/components/shared.module';
import { FormUsuarioComponent } from './formusuario/formusuario.component';
import { UsuarioService } from './service/usuario.service';


@NgModule({
  declarations: [
    UsuarioComponent,
    FormUsuarioComponent
  ],
  imports: [
    CommonModule,
    UsuarioRoutingModule,
    ComponentsModule,
    SharedModule
  ],
  providers : [UsuarioService]
})
export class UsuarioModule { }
