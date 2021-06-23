import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-formulario-reactivo',
  templateUrl: './formulario-reactivo.component.html',
  styleUrls: ['./formulario-reactivo.component.css']
})
export class FormularioReactivoComponent{

  datos!: string;

  formularioContacto = new FormGroup({
      nombre: new FormControl(''),
      rut: new FormControl(''),
      mensaje: new FormControl(''),
  });

  enviar(){
    this.datos = `Nombre=${this.formularioContacto.value.nombre}
                  rut=${this.formularioContacto.value.rut}
                  mensaje=${this.formularioContacto.value.mensaje}`;
  }

}
