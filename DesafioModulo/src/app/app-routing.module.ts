import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { inicio } from './components/inicio/inicio.component';
import { miPagina } from './components/pagina/pagina.component';


const routes: Routes = [
  {path: '', redirectTo: '/components/inicio', pathMatch: 'full'},
  {path: '/components/inicio', component: inicio },
  {path: '/components/pagina', component: miPagina }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
