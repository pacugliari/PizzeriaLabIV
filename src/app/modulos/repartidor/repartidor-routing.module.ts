import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AltaRepartidorComponent } from 'src/app/components/alta-repartidor/alta-repartidor.component';
import { ListaRepartidoresComponent } from 'src/app/components/lista-repartidores/lista-repartidores.component';
import { AuthGuard } from 'src/app/guards/auth.guard';


const routes: Routes = [
  {
    path: 'alta',
    component: AltaRepartidorComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'lista',
    component: ListaRepartidoresComponent,
    canActivate: [AuthGuard] 
  },
  { path: '**', component: ListaRepartidoresComponent,
  canActivate: [AuthGuard] 
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RepartidorRoutingModule { }
