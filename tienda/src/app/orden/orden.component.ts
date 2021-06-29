import { Component, OnInit } from '@angular/core';
import { TotalService } from '../total.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

 

  constructor(private _servicio:TotalService) { }


  productosCarrito!: any; // Array para el carrito
  arraydireccion!: any; // Array para el carrito
  arraytarjeta!: any; // Array para el carrito

  ngOnInit(): void {

    this.productosCarrito = this._servicio.getArray()
    this.arraydireccion = this._servicio.getArrayDireccion()
    this.arraytarjeta = this._servicio.getArrayTarjeta()
    

  }



  FinalizarCompra(){

  }



}
