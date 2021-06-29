import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TotalService } from '../total.service';



@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  template: `
    <app-pago [childMessage]="parentMessage"></app-pago>
  `,
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private _servicio:TotalService){

  }


  ngOnInit(){
  }







  totalDinero = 0;
  totalCarrito = 0;
  hola = ['hola','como'];
  clave = new FormControl('');
  cantidad = new FormControl();
  productosCarrito: any[] = []; // Array para el carrito
  productosCantidad = [{
                        codigo: 0,
                        cant: 0,
                      }
  ];
  productos: any[] = [];

  productosActual1 = [   // Array para items en stock
    {
      codigo: 250, nombre: 'Amazon echo dot 4', precio: 65000,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/alexa.jpg',
      tags : "nvidia, gigabyte, gtx"
    },
    {
      codigo: 251, nombre: 'Chromecast', precio: 35990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/chromecast.jpg',
      tags : "nvidia, msi, gtx"
    },
    {
      codigo: 252, nombre: 'Playstation 4', precio: 390000,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/consolaps4.png',
      tags : "nvidia, evga, gtx, super"
    },
    {
      codigo: 253, nombre: 'MSI Monitor full HD', precio: 209990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/monitor.png',
      tags : "nvidia, msi, gtx, super"
    },
    {
      codigo: 254, nombre: 'Notebook Asus', precio: 675000,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/notebook.png',
      tags : "nvidia, zotac, rtx, 3060"
    },
    {
      codigo: 255, nombre: 'Notebook Asus pro', precio: 839900,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/notebookasuspro.jpg',
      tags : "nvidia, asus, rtx, 3060"
    },
    {
      codigo: 256, nombre: 'Notebook HP', precio: 789990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/notebookhp.png',
      tags : "nvidia, evga, rtx, 3060"
    },
    {
      codigo: 257, nombre: 'Smartwatch', precio: 89900,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/smartwatch.jpg',
      tags : "smartwatch, reloj inteligente, reloj, smart"
    },
    {
      codigo: 258, nombre: 'Tp-Link', precio: 19900,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/tplink.jpg',
      tags : "wifi, tplink, tp"
    },
    {
      codigo: 259, nombre: 'Smart TV Lg', precio: 219990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/tvlg.png',
      tags : "tv, lg, smart, smart tv"
    },
    {
      codigo: 260, nombre: 'TV Full HD', precio: 159990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/tvphilips.jpg',
      tags : "tv, smart, tele, smart tv"
    },
    {
      codigo: 261, nombre: 'Xbox one S', precio: 369990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/xbox.png',
      tags : "consola, xbox, gamer"
    }
  ];





  productosActual = [   // Array para items en stock
    {
      codigo: 250, nombre: 'Amazon echo dot 4', precio: 65000,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/alexa.jpg',
      tags : "nvidia, gigabyte, gtx"
    },
    {
      codigo: 251, nombre: 'Chromecast', precio: 35990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/chromecast.jpg',
      tags : "nvidia, msi, gtx"
    },
    {
      codigo: 252, nombre: 'Playstation 4', precio: 390000,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/consolaps4.png',
      tags : "nvidia, evga, gtx, super"
    },
    {
      codigo: 253, nombre: 'MSI Monitor full HD', precio: 209990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/monitor.png',
      tags : "nvidia, msi, gtx, super"
    },
    {
      codigo: 254, nombre: 'Notebook Asus', precio: 675000,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/notebook.png',
      tags : "nvidia, zotac, rtx, 3060"
    },
    {
      codigo: 255, nombre: 'Notebook Asus pro', precio: 839900,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/notebookasuspro.jpg',
      tags : "nvidia, asus, rtx, 3060"
    },
    {
      codigo: 256, nombre: 'Notebook HP', precio: 789990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/notebookhp.png',
      tags : "nvidia, evga, rtx, 3060"
    },
    {
      codigo: 257, nombre: 'Smartwatch', precio: 89900,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/smartwatch.jpg',
      tags : "smartwatch, reloj inteligente, reloj, smart"
    },
    {
      codigo: 258, nombre: 'Tp-Link', precio: 19900,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/tplink.jpg',
      tags : "wifi, tplink, tp"
    },
    {
      codigo: 259, nombre: 'Smart TV Lg', precio: 219990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/tvlg.png',
      tags : "tv, lg, smart, smart tv"
    },
    {
      codigo: 260, nombre: 'TV Full HD', precio: 159990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/tvphilips.jpg',
      tags : "tv, smart, tele, smart tv"
    },
    {
      codigo: 261, nombre: 'Xbox one S', precio: 369990,
      descripcion: 'Posee: 1xDisplayPort, 1xHDMI, 1xDVI', img: '../../assets/tarjetas/xbox.png',
      tags : "consola, xbox, gamer"
    }
  ];
  productosCarritoActual: any;




  agregarProducto(i: any){
    if(this.productosCarrito.includes(this.productosActual[i])){
      //console.log("Ya tiene el producto")
      for(let j = 0;j<this.productosCantidad.length;j++){
        if(this.productosActual[i].codigo == this.productosCantidad[j].codigo){
          this.productosCantidad[j].cant+=1;
        }
      }
      this.totalDinero+=this.productosActual[i].precio;
      this._servicio.settotaldinero(this.totalDinero) 
      localStorage.setItem("total",JSON.stringify(this.totalDinero));
    }
    else{
      //console.log("No tiene el producto");
      this.productosCarrito.push(this.productosActual[i]);
      this.productosCantidad.push({codigo: this.productosActual[i].codigo, cant: 1});
      this.totalDinero+=this.productosActual[i].precio;
      this._servicio.settotaldinero(this.totalDinero) 
      localStorage.setItem("total",JSON.stringify(this.totalDinero))
    }
    localStorage.setItem("carrito",JSON.stringify(this.productosCarrito));
    localStorage.setItem("cantidad",JSON.stringify(this.productosCantidad));
  }

  eliminarProducto(cod: any){
    for(let i = 0;i<this.productosCarrito.length;i++){
      if(this.productosCarrito[i].codigo == cod){
        this.totalDinero-=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
        localStorage.setItem("total",JSON.stringify(this.totalDinero))
        this._servicio.settotaldinero(this.totalDinero) 
        this.productosCarrito.splice(i,1);
        this.productosCantidad.splice(i+1,1);
      }
    }
    localStorage.setItem("carrito",JSON.stringify(this.productosCarrito));
    localStorage.setItem("cantidad",JSON.stringify(this.productosCantidad));
  }

  actualizarProducto(cod: any){
    for(let i = 0;i<this.productosCarrito.length;i++){
      if(this.productosCarrito[i].codigo == cod){
        this.totalDinero-=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
        this.productosCantidad[i+1].cant = this.cantidad.value;
        this.totalDinero+=(this.productosCarrito[i].precio*this.productosCantidad[i+1].cant);
        this._servicio.settotaldinero(this.totalDinero) 
        localStorage.setItem("total",JSON.stringify(this.totalDinero))
      }
    }
    localStorage.setItem("cantidad",JSON.stringify(this.productosCantidad));
  }

  busquedaClave(){
    let pos = [];
    for(let i=0;i<this.productosActual.length;i++){
      if(this.productosActual[i].tags.search(this.clave.value) == -1){
        pos.push(this.productosActual[i].codigo);
      }
      else{
        console.log('Encontrado');
      }
    }
    for(let j=0;j<pos.length;j++){
      for(let i=0;i<this.productosActual.length;i++){
        if(pos[j]==this.productosActual[i].codigo){
          this.productosActual.splice(i,1);
        }
      }
    }
    
  }

  quitarBusqueda(){
    this.productosActual = [];
    for(let i=0; i<this.productosActual1.length;i++){
      this.productosActual.push({codigo: this.productosActual1[i].codigo, nombre: this.productosActual1[i].nombre, precio: this.productosActual1[i].precio, 
        descripcion: this.productosActual1[i].descripcion, img: this.productosActual1[i].img, tags: this.productosActual1[i].tags});
    }
    this.productosActual = this.productosActual1;
  }



  cofirmarCarrito(){
    this._servicio.setArray(this.productosCarrito)
    

  }

}
