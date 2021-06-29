import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalService {


  productosCarrito: any[] = []; // Array para el carrito
  datosDireccion: any[] = []; // Array para el direccion
  datosTarjeta: any[] = []; // Array para el usuario
  datosUsuario: any[] = []; // Array para el usuario


  constructor (){
    //for(var i=0; i<this.productosCarrito.length; i++)
     
  }


  setArray(array: any) {
    this.productosCarrito = array;
  }

  setArrayDireccion(array: any) {
    this.productosCarrito = array;
  }


  setArrayTarjeta(array: any) {
    this.datosTarjeta = array;
  }


  setArrayUsuario(array: any){
    this.datosUsuario = array;
  }


  getArrayTarjeta() {
    return this.datosTarjeta;
  }

  
  getArray() {
    return this.productosCarrito;
  }

  getArrayDireccion() {
    return this.productosCarrito;
  }

  getArrayUsuario() {
    return this.productosCarrito;
  }

  imprimir(){
    console.log(this.productosCarrito)
  }
}

