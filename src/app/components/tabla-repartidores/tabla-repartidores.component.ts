import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Repartidor } from 'src/app/models/repartidor';
import { RepartidorService } from 'src/app/services/repartidor.service';

@Component({
  selector: 'app-tabla-repartidores',
  templateUrl: './tabla-repartidores.component.html',
  styleUrls: ['./tabla-repartidores.component.css']
})
export class TablaRepartidoresComponent {
  repartidores : Array<Repartidor> = [];
  @Input()  mostrarSeleccionar : boolean = false;
  @Output() eventRepartidorSeleccionado = new EventEmitter<Repartidor>();
  
  constructor(private repartidorService:RepartidorService){
  }

  async ngOnInit(){
    this.repartidorService.getRepartidores()
    .then((respuesta)=> {
      //console.log(respuesta)
      this.repartidores = respuesta;
    });
  }

  seleccionar(repartidor : Repartidor){
    this.eventRepartidorSeleccionado.emit(repartidor);
  }
}
