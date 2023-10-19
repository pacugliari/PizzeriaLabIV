import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { Repartidor } from 'src/app/models/repartidor';
import { PizzasService } from 'src/app/services/pizzas.service';

@Component({
  selector: 'app-tabla-pizzas',
  templateUrl: './tabla-pizzas.component.html',
  styleUrls: ['./tabla-pizzas.component.css']
})
export class TablaPizzasComponent {
  pizzas : Array<Pizza> = [];
  @Input()  mostrarSeleccionar : boolean = true;
  @Output() eventPizzaSeleccionada = new EventEmitter<Pizza>();
  
  constructor(private pizzaService:PizzasService){
  }

  async ngOnInit(){
    this.actualizar();
  }

  actualizar(){
    this.pizzaService.getPizzas()
    .then((respuesta)=> {
      //console.log(respuesta)
      this.pizzas = respuesta;
    });
  }

  seleccionar(pizza : Pizza){
    this.eventPizzaSeleccionada.emit(pizza);
  }
}
