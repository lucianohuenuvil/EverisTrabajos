import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  array: any[] = [];

  datos!: any;
  i=0;

  formularioContacto = new FormGroup({
      nombre: new FormControl(''),
      precio: new FormControl(''),
      codigo: new FormControl(''),
      stock: new FormControl(''),
  });

  

  enviar(){
                  
    this.array[this.i] = {nombre:  this.formularioContacto.value.nombre , precio: this.formularioContacto.value.precio
                   , codigo:  this.formularioContacto.value.codigo, stock: this.formularioContacto.value.stock};

    this.i++;

 
  }

  

}
