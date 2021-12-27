import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MarcaRoutingModule } from './marca-routing.module';
import { MarcaComponent } from './marca/marca.component';
import { FormmarcaComponent } from './formmarca/formmarca.component';
import { SharedModule } from '../shared/components/shared.module';
import { ComponentsModule } from '../shared/components/components.module';
import { MarcaService } from './service/marca.service';


@NgModule({
  declarations: [
    MarcaComponent,
    FormmarcaComponent
  ],
  imports: [
    CommonModule,
    MarcaRoutingModule,
    SharedModule,
    ComponentsModule
  ],
  providers : [MarcaService]
})
export class MarcaModule { }
