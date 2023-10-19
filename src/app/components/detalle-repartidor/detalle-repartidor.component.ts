import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Repartidor } from 'src/app/models/repartidor';

@Component({
  selector: 'app-detalle-repartidor',
  templateUrl: './detalle-repartidor.component.html',
  styleUrls: ['./detalle-repartidor.component.css']
})
export class DetalleRepartidorComponent {
  @Input() repartidor?: Repartidor;
}
