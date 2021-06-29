import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TotalService {


  productosCarrito: any[] = []; // Array para el carrito
  datosDireccion: any[] = []; // Array para el direccion
  datosTarjeta: any[] = []; // Array para el usuario
  datosUsuario: any[] = []; // Array para el usuario
  totaldinero = 0


  constructor (){
    //for(var i=0; i<this.productosCarrito.length; i++)
     
  }


  settotaldinero(array: any) {
    this.totaldinero = array
  }



  setArray(array: any) {
    this.productosCarrito = array;
  }

  setArrayDireccion(array: any) {
    this.datosDireccion = array;
  }


  setArrayTarjeta(array: any) {
    this.datosTarjeta = array;
  }


  setArrayUsuario(array: any){
    this.datosUsuario = array;
  }



  gettotaldinero() {
    return this.totaldinero
  }

  getArrayTarjeta() {
    return this.datosTarjeta;
  }

  
  getArray() {
    return this.productosCarrito;
  }

  getArrayDireccion() {
    return this.datosDireccion;
  }

  getArrayUsuario() {
    return this.datosUsuario;
  }

  imprimir(){
    console.log(this.productosCarrito)
    console.log(this.totaldinero)
  }
}

