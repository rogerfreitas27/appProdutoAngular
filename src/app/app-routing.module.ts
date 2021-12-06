import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormcategoriaComponent } from './categoria/formcategoria/formcategoria.component';
import { CategoriaModule } from './categoria/categoria.module';





const routes: Routes = [
  { path: '', pathMatch: 'full',redirectTo:'login' },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
  },
  {
    path: 'categoria',     
   loadChildren: () => import('./categoria/categoria.module').then(m => m.CategoriaModule)
  },
  
  {
    path: 'marca',
    loadChildren: () => import('./marca/marca.module').then(m => m.MarcaModule)
  },
  {
    path: 'produto',
    loadChildren: () => import('./produto/produto.module').then(m => m.ProdutoModule)
  },
  
  {
    path: 'usuario',
    loadChildren: () => import('./usuario/usuario.module').then(m => m.UsuarioModule)
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)], 
  exports: [RouterModule]
})
export class AppRoutingModule { }
