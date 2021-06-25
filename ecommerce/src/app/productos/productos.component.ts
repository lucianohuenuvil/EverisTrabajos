import { Component } from '@angular/core';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent {

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

  visual = {
    'carrito':false
  }


  mostrar = false


  productos = [
    {codigo:'1001', nombre:'Notebook HP', precio:'250000' , cantidad:'1' , descripcion:'Marca: HP Modelo: 15-dk1028la Color:Negro sombra' , ruta:'https://www.pcfactory.cl/public/foto/42347/1_500.jpg?t=1624405633'},
    {codigo:'1002', nombre:'Xiaomi redmi 9', precio:'129990', cantidad:'1' , descripcion:'Marca: Xiaomi Modelo: Redmi 9 64gb Color:Morado', ruta:'https://www.pcfactory.cl/public/foto/40408/1_500.jpg?t=1618005742'},
    {codigo:'1003', nombre:'Sony PS4', precio:'350000', cantidad:'1' , descripcion:'Marca: Sony Modelo: Play Station 4 Slim Color:Negro', ruta:'https://www.pcfactory.cl/public/foto/28325/1_500.jpg?t=1519142052'},
    {codigo:'1004', nombre:'Echo dot 4', precio:'49900', cantidad:'1' , descripcion:'Marca: Amazon Echo dot Modelo: Echo dot 4 Color:Azul claro', ruta:'https://www.pcfactory.cl/public/foto/40975/1_500.jpg?t=1617974476'},
    {codigo:'1005', nombre:'Monitor MSI', precio:'125990', cantidad:'1' , descripcion:'Marca: MSI Modelo:  G27C5 HD Color:Negro ', ruta:'https://www.pcfactory.cl/public/foto/37751/1_500.jpg?t=1600290461'},
    {codigo:'1006', nombre:'Teclado mecánico', precio:'55990', cantidad:'1' , descripcion:'Marca: Corsair Modelo: K68 Mecánico Color:Cherry red', ruta:'https://www.pcfactory.cl/public/foto/29264/1_500.jpg?t=1551453616'},
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
          , codigo:  this.prod.codigo, cantidad: this.prod.cantidad, descripcion: this.prod.descripcion  };

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




  

/*
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
*/

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
