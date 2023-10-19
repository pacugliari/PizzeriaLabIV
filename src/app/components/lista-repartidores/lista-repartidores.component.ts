import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Pais } from 'src/app/models/pais';
import { Repartidor } from 'src/app/models/repartidor';

@Component({
  selector: 'app-lista-repartidores',
  templateUrl: './lista-repartidores.component.html',
  styleUrls: ['./lista-repartidores.component.css']
})
export class ListaRepartidoresComponent {

  repartidorSeleccionado : Repartidor = new Repartidor();
  paisSeleccionado : Pais = new Pais();

  constructor(private router : Router){
  }


  mostrar(event:any){
    this.repartidorSeleccionado = event;
    //console.log(event);
    this.paisSeleccionado = event.pais;
  }


}
