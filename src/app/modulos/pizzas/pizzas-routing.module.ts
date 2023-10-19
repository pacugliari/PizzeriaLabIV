import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PizzasComponent } from 'src/app/components/pizzas/pizzas.component';
import { PerfilGuard } from 'src/app/guards/perfil.guard';


const routes: Routes = [
  { path: '', component: PizzasComponent,canActivate: [PerfilGuard]},
  { path: '**', component: PizzasComponent,canActivate: [PerfilGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PizzasRoutingModule { }
