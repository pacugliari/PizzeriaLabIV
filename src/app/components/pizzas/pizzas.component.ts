import { Component, ViewChild } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { TablaPizzasComponent } from '../tabla-pizzas/tabla-pizzas.component';
import { ModificarPizzaComponent } from '../modificar-pizza/modificar-pizza.component';

@Component({
  selector: 'app-pizzas',
  templateUrl: './pizzas.component.html',
  styleUrls: ['./pizzas.component.css']
})
export class PizzasComponent {

  pizzaSeleccionada ?: Pizza;
  @ViewChild('tablaPizza') tabla?: TablaPizzasComponent;
  @ViewChild('inputModificar') inputModificar?: ModificarPizzaComponent;

  mostrar(event:any){
    //console.log(event);
    this.pizzaSeleccionada = event;
    this.inputModificar?.valores(event);
  }

  actualizarLista(){
    this.tabla?.actualizar();
  }
}
