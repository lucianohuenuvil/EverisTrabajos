import { Component, OnInit } from '@angular/core';
import { TotalService } from '../total.service';

@Component({
  selector: 'app-factura',
  templateUrl: './factura.component.html',
  styleUrls: ['./factura.component.css']
})
export class FacturaComponent implements OnInit {

  productosCarrito!: any; // Array para el carrito
  arraydireccion!: any; // Array para el carrito
  arraytarjeta!: any; // Array para el carrito
  total !: any;

  constructor(private _servicio:TotalService) { }

  ngOnInit(): void {

    
    
    this.productosCarrito = this._servicio.getArray()
    this.arraydireccion = this._servicio.getArrayDireccion()
    this.arraytarjeta = this._servicio.getArrayTarjeta()

    this.total = this._servicio.gettotaldinero()
    
  }

}
