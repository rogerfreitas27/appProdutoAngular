import { NgModule } from '@angular/core';
import { MenuComponent } from '../../menu/menu.component';
import { FooterComponent } from '../../footer/footer.component';






@NgModule({
  declarations: [
    
    MenuComponent,
    FooterComponent // <-- Enable using the component html tag in current module
],
  exports: [MenuComponent, FooterComponent]
  
})
export class ComponentsModule { }
