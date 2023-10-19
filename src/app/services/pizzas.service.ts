import { Injectable } from '@angular/core';
import { addDoc, collection, deleteDoc, doc, getDocs, updateDoc } from 'firebase/firestore';
import { firestore } from 'src/main';
import { Pizza } from '../models/pizza';

@Injectable({
  providedIn: 'root'
})
export class PizzasService {
  pizzas : Array<Pizza> = [];
  constructor() { }

  agregarPizza (pizza:any) {
    const ref = collection(firestore,'pizzas');
    return addDoc(ref,pizza);
  }

  async borrarPizza(pizza: Pizza){
    let retorno = false;
    const usuarioRef = collection(firestore,'pizzas');
      console.log(pizza.id)
      const documento = doc(usuarioRef,pizza.id)
      await deleteDoc(documento)
        .then((respuesta)=>{
          retorno = true;
        })
        .catch((error) => {
      });
      return retorno;
  }

  async modificarPizza(pizza: any){
    let retorno = false;
    const usuarioRef = collection(firestore,'pizzas');
      const documento = doc(usuarioRef,pizza.id)
      await updateDoc(documento,{
          ingredientes: pizza.ingredientes,
          precio  : pizza.precio,
          peso : pizza.peso
        })
        .then((respuesta)=>{
          retorno = true;
        })
        .catch((error) => {
      });
      return retorno;
  }

  
  async getPizzas() {
    const querySnapshot = await getDocs(collection(firestore, "pizzas"));
    this.pizzas = [];
    querySnapshot.forEach((doc) => {
      let pizza = doc.data() as any;
      pizza.id = doc.id;
      this.pizzas.push(pizza)
    });
    return this.pizzas;
  }
}
