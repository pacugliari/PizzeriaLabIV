import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Pizza } from 'src/app/models/pizza';
import { PizzasService } from 'src/app/services/pizzas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-baja-pizza',
  templateUrl: './baja-pizza.component.html',
  styleUrls: ['./baja-pizza.component.css']
})
export class BajaPizzaComponent {
  @Input() pizza ?: Pizza;
  @Output() actualizar = new EventEmitter<boolean>(); 

  constructor(private pizzaService:PizzasService){

  }

  borrar(){
    if(this.pizza?.nombre){
      this.pizza.nombre = "";
      this.pizzaService.borrarPizza(this.pizza)
        .then((result)=>{
          if(result){
            Swal.fire("","Pizza borrada de manera correcta","success");
            this.actualizar.emit(true);
          }else{
            Swal.fire("ERROR","La pizza no se pudo borrar","error");
          }
        })
    }
    //console.log("desde borrar:",this.pizza)
  }
}
