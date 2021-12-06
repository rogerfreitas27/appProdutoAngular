import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';



//import { MenuComponent } from './menu';
//import { MarcaService } from './marca/service/marca.service';



import { ComponentsModule } from './shared/components/components.module';
import { SharedModule } from './shared/components/shared.module';



@NgModule({
  declarations: [
    AppComponent
    
      
  ], 
  imports: [
    AppRoutingModule,
   // RouterModule,
    BrowserModule,
    ComponentsModule,
    SharedModule
    
    
   
  
  ],
  providers: [
    //CategoriaService,MarcaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
