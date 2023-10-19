import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PizzasRoutingModule } from './pizzas-routing.module';
import { PizzasComponent } from 'src/app/components/pizzas/pizzas.component';
import { AltaPizzaComponent } from 'src/app/components/alta-pizza/alta-pizza.component';
import { BajaPizzaComponent } from 'src/app/components/baja-pizza/baja-pizza.component';
import { ModificarPizzaComponent } from 'src/app/components/modificar-pizza/modificar-pizza.component';
import { TablaPizzasComponent } from 'src/app/components/tabla-pizzas/tabla-pizzas.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    PizzasComponent,
    AltaPizzaComponent,
    BajaPizzaComponent,
    ModificarPizzaComponent,
    TablaPizzasComponent,
  ],
  imports: [
    CommonModule,
    PizzasRoutingModule,
    ReactiveFormsModule,
  ]
})
export class PizzasModule { }
