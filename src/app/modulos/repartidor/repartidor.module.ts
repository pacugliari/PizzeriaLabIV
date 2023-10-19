import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RepartidorRoutingModule } from './repartidor-routing.module';
import { AltaRepartidorComponent } from 'src/app/components/alta-repartidor/alta-repartidor.component';
import { ListaRepartidoresComponent } from 'src/app/components/lista-repartidores/lista-repartidores.component';
import { DetallePaisComponent } from 'src/app/components/detalle-pais/detalle-pais.component';
import { DetalleRepartidorComponent } from 'src/app/components/detalle-repartidor/detalle-repartidor.component';
import { TablaPaisesComponent } from 'src/app/components/tabla-paises/tabla-paises.component';
import { TablaRepartidoresComponent } from 'src/app/components/tabla-repartidores/tabla-repartidores.component';
import { ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    AltaRepartidorComponent,
    ListaRepartidoresComponent,
    TablaPaisesComponent,
    DetalleRepartidorComponent,
    TablaRepartidoresComponent,
    DetallePaisComponent
  ],
  imports: [
    CommonModule,
    RepartidorRoutingModule,
    ReactiveFormsModule,
  ]
})
export class RepartidorModule { }
