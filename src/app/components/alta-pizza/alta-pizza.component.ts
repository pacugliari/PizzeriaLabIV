import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PizzasService } from 'src/app/services/pizzas.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-pizza',
  templateUrl: './alta-pizza.component.html',
  styleUrls: ['./alta-pizza.component.css']
})
export class AltaPizzaComponent {

  esValidoPeso : boolean = false;
  @Output() actualizar = new EventEmitter<boolean>(); 
  
  formPizza = this.formBuilder.group({
    nombre: ['', [Validators.required]],
    ingredientes: ['', [Validators.required]],
    precio: ['',[Validators.required]],
    peso: ['', [Validators.required]],
  });

  constructor(private formBuilder:FormBuilder,private pizzaService:PizzasService){

  }

  altaPizza(){
    if(this.formPizza.valid){
      let data = {
        nombre: this.formPizza.value.nombre,
        ingredientes: this.formPizza.value.ingredientes,
        precio: this.formPizza.value.precio,
        peso: this.formPizza.value.peso,
      }
      this.pizzaService.agregarPizza(data)
        .then((respuesta)=>{
          Swal.fire("","Pizza se guardado de manera correcta","success")
          this.actualizar.emit(true);
        })
        .catch((error)=>{
          Swal.fire("","Error al guardar la pizza","error")
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
