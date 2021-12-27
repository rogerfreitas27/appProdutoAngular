import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ComponentsModule } from '../shared/components/components.module';
import { SharedModule } from '../shared/components/shared.module';




@NgModule({
  declarations: [
    DashboardComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    ComponentsModule,
    SharedModule
   // AppModule
  ]
})
export class DashboardModule { }
