import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { TotalService } from '../total.service';
import { Router } from '@angular/router'



@Component({
  selector: 'app-pago',
  templateUrl: './pago.component.html',
  styleUrls: ['./pago.component.css']
})
export class PagoComponent implements OnInit {

  constructor(private _servicio:TotalService, private router: Router) { }

  ngOnInit(): void {
    this._servicio.imprimir()
  }


  formularioContacto = new FormGroup({
    pais: new FormControl('',  [
      Validators.required,
      Validators.minLength(4)
    ]),
    ciudad: new FormControl('', [
      Validators.required,
      Validators.minLength(2)
    ]),
    region: new FormControl('', [
      Validators.required,
      Validators.minLength(5)
    ]),
    calle: new FormControl('', [
      Validators.required,
      Validators.minLength(3)
    ]),
    codigoPostal: new FormControl('', [
      Validators.required,
      Validators.minLength(4)
    ]),
  });


  formularioPago = new FormGroup({
    nombre: new FormControl('',  [
      Validators.required,
      Validators.minLength(2)
    ]),
    tipo: new FormControl('',  [
      Validators.required
    ]),
    codigotarjeta: new FormControl('', [
      Validators.required,
      Validators.minLength(16),
      Validators.maxLength(16)
    ]),
    codigoseguridad: new FormControl('', [
      Validators.required,
      Validators.minLength(3),
      Validators.maxLength(3)
    ]),
    fecha: new FormControl('', [
      Validators.required
    ])
  });



  enviar(){


    this._servicio.setArrayDireccion(this.formularioContacto)
  }


  
  enviarPago(){


    

    this._servicio.setArrayTarjeta(this.formularioPago)



    this.router.navigate(['/orden'])

  }




}
