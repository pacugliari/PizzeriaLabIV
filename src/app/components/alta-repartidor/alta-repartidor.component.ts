import { Component } from '@angular/core';
import { Validators, FormBuilder } from '@angular/forms';
import { Pais } from 'src/app/models/pais';
import { RepartidorService } from 'src/app/services/repartidor.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-alta-repartidor',
  templateUrl: './alta-repartidor.component.html',
  styleUrls: ['./alta-repartidor.component.css']
})
export class AltaRepartidorComponent {
  pais :Pais = new Pais();

  formRepartidor = this.formBuilder.group({
    dni: ['', [Validators.required]],
    nombre: ['', [Validators.required]],
    edad: ['', [Validators.required]],
    capacidad: ['',[Validators.required]],
    unidadPropia: [true, [Validators.required]],
    pais: ['', [Validators.required]],
  });

  constructor(private formBuilder:FormBuilder,private repartidorService:RepartidorService){

  }

  registrarRepartidor(){
    //console.log(this.formActor.value);
    
    let data = {
      dni: this.formRepartidor.value.dni,
      nombre: this.formRepartidor.value.nombre,
      edad: this.formRepartidor.value.edad,
      capacidad: this.formRepartidor.value.capacidad,
      unidadPropia: this.formRepartidor.value.unidadPropia,
      pais: JSON.stringify(this.pais),
    }
    this.repartidorService.agregarRepartidor(data)
      .then((respuesta)=>{
        Swal.fire("","Repartidor guardado de manera correcta","success")
      })
      .catch((error)=>{
        Swal.fire("","Error al guardar el repartidor","error")
        console.log(error);
      })
    this.formRepartidor.reset();
  }

  cargarPais(pais:Pais){
    this.pais = pais;
    if(pais.nombre){
      this.formRepartidor.get('pais')?.setValue(pais.nombre);
    }
    console.log(this.pais)
  }

}
