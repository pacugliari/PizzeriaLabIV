import { Injectable } from '@angular/core';
import { collection, addDoc, getDocs } from 'firebase/firestore';
import { firestore } from 'src/main';
import { Repartidor } from '../models/repartidor';

@Injectable({
  providedIn: 'root'
})
export class RepartidorService {

  repartidores : Array<Repartidor> = [];

  agregarRepartidor (repartidor:any) {
    const ref = collection(firestore,'repartidores');
    return addDoc(ref,repartidor);
  }

  async getRepartidores() {
    const querySnapshot = await getDocs(collection(firestore, "repartidores"));
    this.repartidores = [];
    querySnapshot.forEach((doc) => {
      let repartidor = doc.data() as any;
      if(repartidor.pais)
        repartidor.pais = JSON.parse(repartidor.pais);
      this.repartidores.push(repartidor)
    });
    return this.repartidores;
  }

  constructor() { }
}
