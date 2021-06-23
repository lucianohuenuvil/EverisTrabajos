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
  orden: any[] = [];
  calculo!:number
  existe = false;
  existeCode = false;
  mensaje!: string;
  datos!: any;
  newCodigo!:any
  newNombre!:any
  newCantidad!:any
  newPrecio!:any
  totalPago = 0;
  existeOrden = false;






  

  i=0;
  h=0;

  formularioContacto = new FormGroup({
      nombre: new FormControl(''),
      precio: new FormControl(''),
      codigo: new FormControl(''),
      cantidad: new FormControl(''),
  });


  formularioModificacion = new FormGroup({
    nombre: new FormControl(''),
    precio: new FormControl(''),
    codigo: new FormControl(''),
    cantidad: new FormControl(''),
});

  

  enviar(){

    for(let j=0; j<this.array.length; j++){

      if(parseInt(this.formularioContacto.value.codigo) == parseInt(this.array[j].codigo)){
        
        this.existe = true
        this.mensaje = "El producto ya existe!";
      }
    }
    if ( this.existe == false){
      this.calculo = (parseInt(this.formularioContacto.value.precio)*0.19) + parseInt(this.formularioContacto.value.precio);
      this.array[this.i] = {nombre:  this.formularioContacto.value.nombre , precio: this.formularioContacto.value.precio, iva: this.calculo
        , codigo:  this.formularioContacto.value.codigo, cantidad: this.formularioContacto.value.cantidad };

      this.i++;
      this.mensaje = "";
    }
                  
    this.existe = false

 
  }

  eliminar(code:string){
    for(let j=0; j<this.array.length; j++){
      if(parseInt(code) == parseInt(this.array[j].codigo)){
        this.array[j] = {nombre:  null , precio: null, iva:null
          , codigo:  null, cantidad: null };
      }
    }
  }




  modificar(code:string){
    for(let j=0; j<this.array.length; j++){
      if(parseInt(code) == parseInt(this.array[j].codigo)){

        do{

          this.newCodigo = prompt("Ingrese el código del producto");
          if(isNaN(this.newCodigo)){
            this.newCodigo = false
          }
        }
        while (!this.newCodigo)

        do{
          this.newCantidad = prompt("Ingrese la cantidad del producto");
          if(isNaN(this.newCantidad)){
            this.newCantidad = false
          }
        }
        while (!this.newCantidad)

        do{
          this.newNombre = prompt("Ingrese el nombre del producto");
        }
        while (!this.newNombre)

        do{
          this.newPrecio = prompt("Ingrese el precio del producto");
          if(isNaN(this.newPrecio)){
            this.newPrecio = false
          }
          
        }
        while (!this.newPrecio)

        this.eliminarOrden(this.array[j].codigo);


        this.calculo = (parseInt(this.newPrecio)*0.19) + parseInt(this.newPrecio);
        this.array[j] = {nombre:  this.newNombre , precio: this.newPrecio
          , codigo:  this.newCodigo, cantidad: this.newCantidad, iva: this.calculo};


        


        break;
      }
    }
  }
  



  anadir(code:string){
    for(let j=0; j<this.array.length; j++){

      if(parseInt(code) == parseInt(this.array[j].codigo)){
        this.calculo = (parseInt( this.array[j].precio)*0.19) + parseInt(this.array[j].precio);
        this.orden[this.h] = {nombre:  this.array[j].nombre , total:this.calculo, precio: this.array[j].precio, iva: this.calculo
          , codigo:  this.array[j].codigo, cantidad: 1 };
        this.h++; 
      }

    }
    this.totalPago = 0;
    for(let j=0; j<this.orden.length; j++){
        if(parseInt(this.orden[j].total)!=null)
          this.totalPago += parseInt(this.orden[j].total)
    }


  }



  eliminarOrden(code:string){
    console.log(this.orden);
    for(let j=0; j<this.orden.length; j++){
 
      if(parseInt(code) == parseInt(this.orden[j].codigo)){
        this.orden[j] = {nombre:  null , precio: null, iva:null
          , codigo:  null, cantidad: null };
      }
    }

    this.totalPago = 0;
    for(let j=0; j<this.orden.length; j++){
      if(parseInt(this.orden[j].total)!=null)
        this.totalPago += parseInt(this.orden[j].total)
    }

    if (!this.totalPago)
        this.totalPago = 0;

    

  }


  aumentarCantidad(code:string){
    console.log(this.orden);
    for(let j=0; j<this.orden.length; j++){
 
      if(parseInt(code) == parseInt(this.orden[j].codigo)){

        let aumento = this.orden[j].cantidad + 1;

        this.orden[j] = {nombre:  this.orden[j].nombre , precio: this.orden[j].precio, iva:this.orden[j].iva
          , codigo:  this.orden[j].codigo, cantidad: aumento, total: aumento * this.orden[j].iva };

        this.totalPago = 0;
        for(let j=0; j<this.orden.length; j++){
          if(parseInt(this.orden[j].total)!=null)
           this.totalPago += parseInt(this.orden[j].total)
        }


        break;
      }
    }


  }



  disminuirCantidad(code:string){
    console.log(this.orden);
    for(let j=0; j<this.orden.length; j++){
 
      if(parseInt(code) == parseInt(this.orden[j].codigo)){

        let aumento = this.orden[j].cantidad - 1;

        this.orden[j] = {nombre:  this.orden[j].nombre , precio: this.orden[j].precio, iva:this.orden[j].iva
          , codigo:  this.orden[j].codigo, cantidad: aumento, total: aumento * this.orden[j].iva };

        this.totalPago = 0;
        for(let j=0; j<this.orden.length; j++){
          if(parseInt(this.orden[j].total)!=null)
            this.totalPago += parseInt(this.orden[j].total)
        }
        if (!this.totalPago)
          this.totalPago = 0;


        break;
      }
    }
  }




  













}
