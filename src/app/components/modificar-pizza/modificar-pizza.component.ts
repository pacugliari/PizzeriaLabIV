import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Pizza } from 'src/app/models/pizza';
import { PizzasService } from 'src/app/services/pizzas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-modificar-pizza',
  templateUrl: './modificar-pizza.component.html',
  styleUrls: ['./modificar-pizza.component.css']
})
export class ModificarPizzaComponent {
  esValidoPeso : boolean = false;
  @Output() actualizar = new EventEmitter<boolean>(); 
  @Input() pizza ?: Pizza;
  
  formPizza = this.formBuilder.group({
    ingredientes: ['', [Validators.required]],
    precio: ['',[Validators.required]],
    peso: ['', [Validators.required]],
  });

  constructor(private formBuilder:FormBuilder,private pizzaService:PizzasService){

  }

  valores(pizza:Pizza){
    if(pizza.ingredientes && pizza.precio && pizza.peso ){
      this.formPizza.get("ingredientes")?.setValue(pizza.ingredientes);
      this.formPizza.get("precio")?.setValue(String(pizza.precio));
      this.formPizza.get("peso")?.setValue(String(pizza.peso));
    }

  }

  modificar(){
    if(this.formPizza.valid){
      let data = {
        id: this.pizza?.id,
        ingredientes: this.formPizza.value.ingredientes,
        precio: this.formPizza.value.precio,
        peso: this.formPizza.value.peso,
      }
      this.pizzaService.modificarPizza(data)
        .then((respuesta)=>{
          Swal.fire("","Pizza se modifico de manera correcta","success")
          this.actualizar.emit(true);
        })
        .catch((error)=>{
          Swal.fire("","Error al modifico la pizza","error")
          console.log(error);
        })
      this.formPizza.reset();
    }
  }

  calcularPeso(){
    let peso = this.formPizza.value.peso;
    this.esValidoPeso =  ( Number(peso) >= 500 && Number(peso)<=1000)
  }
}
