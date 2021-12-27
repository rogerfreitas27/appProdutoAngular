import { NgModule } from '@angular/core';
import { DataTablesModule } from "angular-datatables";
import { CommonModule } from '@angular/common';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { RouterModule } from '@angular/router';
import {HttpClientModule,HTTP_INTERCEPTORS } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { Categoria } from 'src/app/categoria/model/categoria';
import { AuthService } from '../service/auth.service';







//import {NgbdCollapseNavbar} from './collapse-navbar';




@NgModule({
  imports:      [ NgbModule, DataTablesModule,CommonModule,RouterModule, HttpClientModule],
  exports: [DataTablesModule, CommonModule,NgbModule,ReactiveFormsModule],
  providers:[ HttpClientModule,AuthService]
 
 
})
export class SharedModule { }
