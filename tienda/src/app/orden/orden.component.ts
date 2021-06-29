import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TotalService } from '../total.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

 

  constructor(private _servicio:TotalService,  private router: Router) { }


  productosCarrito!: any; // Array para el carrito
  arraydireccion!: any; // Array para el carrito
  arraytarjeta!: any; // Array para el carrito
  total !: any;

  ngOnInit(): void {

    this.productosCarrito = this._servicio.getArray()
    this.arraydireccion = this._servicio.getArrayDireccion()
    this.arraytarjeta = this._servicio.getArrayTarjeta()

    this.total = this._servicio.gettotaldinero()
    

  }



  FinalizarCompra(){
    this.router.navigate(['/factura'])

  }



}
