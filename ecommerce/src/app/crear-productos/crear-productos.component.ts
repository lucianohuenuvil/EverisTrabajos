import { Component } from '@angular/core';

@Component({
  selector: 'app-crear-productos',
  templateUrl: './crear-productos.component.html',
  styleUrls: ['./crear-productos.component.css']
})
export class CrearProductosComponent  {


  cantidad!:any
  totalIva!:any
  total!:any

  

  prod:any = {
    codigo:'',
    nombre:'',
    precio:'',
    cantidad:'',
    total:'',
    totalIva:''
  }

  array: any[] = [];

  k = 0;
  totalPrecio= 0;

  productos = [
    {codigo:'1001', nombre:'manzana', precio:'1500' , cantidad:'1'},
    {codigo:'1002', nombre:'pera', precio:'1200', cantidad:'1'},
    {codigo:'1003', nombre:'huevos', precio:'3500', cantidad:'1'},
    {codigo:'1004', nombre:'piña', precio:'1200', cantidad:'1'},
  ]

  verificarProductos(){
    return this.productos.length>0;
  }


  aumentoCantidad(prod:any){
    for(let i=0; i<this.productos.length; i++){
      if(this.productos[i].codigo == prod.codigo){
        let variable = parseInt(this.productos[i].cantidad) + 1 
        this.productos[i].cantidad = variable.toString()
        return;
      }  
    }
    alert('El producto no se encontró');
  }


  
  disminucionCantidad(prod:any){
    for(let i=0; i<this.productos.length; i++){
      if(this.productos[i].codigo == prod.codigo){
        let variable = parseInt(this.productos[i].cantidad) - 1 
        if (variable == 0){
          alert("La cantidad no puede ser menor a 0")
        }
        else{
          this.productos[i].cantidad = variable.toString()
        }
        return;
      }  
    }
    alert('El producto no se encontró');
  }


  comprar(prod:string){
    console.log(prod)
    for(let i=0; i<this.productos.length; i++){
      if(parseInt(this.productos[i].codigo) == parseInt(prod)){
        let total = parseInt(this.productos[i].cantidad) * parseInt(this.productos[i].precio)
        this.prod.nombre = this.productos[i].nombre
        this.prod.codigo = this.productos[i].codigo
        this.prod.total = total
        this.prod.totalIva = (total * 0.19) + total
        this.prod.cantidad = this.productos[i].cantidad

        

        this.array[this.k] = {nombre:  this.prod.nombre , total: this.prod.total, totalIva: this.prod.totalIva
          , codigo:  this.prod.codigo, cantidad: this.prod.cantidad };

        this.k = this.k + 1
        this.totalPrecio = 0;
        for(let k=0; k<this.array.length; k++){
          console.log(this.array[k])
          this.totalPrecio += parseInt(this.array[k].totalIva)
        }

        return;
      }  
    }
    alert('El producto no se encontró');
  }




  


  agregar(){
    for(let i=0; i<this.productos.length; i++){
       if(this.productos[i].codigo == this.prod.codigo){
         alert('El producto no se ha ingresado porque existe');    
         return;
       }   
    }
    
    let totalProduct = this.prod.cantidad*this.prod.precio
    this.totalIva = this.total + (this.total*0.19)

    this.productos.push({codigo:this.prod.codigo, 
                         nombre:this.prod.nombre,
                         precio:this.prod.precio,
                         cantidad:this.prod.cantidad,
                    
                        });
    this.prod.codigo='';
    this.prod.nombre='';
    this.prod.precio='';
 }


  seleccionar(prod:any){
    this.prod.codigo = prod.codigo
    this.prod.nombre = prod.nombre
    this.prod.precio = prod.precio
  }


  eliminar(prod:any){
    for(let i=0; i<this.productos.length; i++){
      if(this.productos[i].codigo == prod.codigo){
        this.productos.splice(i,1);
        alert('El producto fue eliminado');
        return;
      }  
    }
    alert('El producto no se encontró');
  }


  modificar(){

    for(let i=0; i<this.productos.length; i++){
      if(this.productos[i].codigo == this.prod.codigo){
        this.productos[i].nombre = this.prod.nombre
        this.productos[i].precio = this.prod.precio
        return
      }
    }
    alert('El codigo no existe');
  }


}
