import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/bienvenida' },
  { path: 'bienvenida', component: BienvenidaComponent},
  { path: 'login', component: LoginComponent},
  { path: 'repartidor', loadChildren: () => import('./modulos/repartidor/repartidor.module').then(m => m.RepartidorModule) },
  { path: 'pizzas', loadChildren: () => import('./modulos/pizzas/pizzas.module').then(m => m.PizzasModule) },
  { path: '**', component: BienvenidaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
