import { Component } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.css']
})
export class ItemComponent  {


  dato = [{ nombre:"Notebook" , precio:"500000" , descripcion: "Gamer"},
  { nombre:"Pantalla" , precio:"250000" , descripcion: "Full hd"},
  { nombre:"Impresora" , precio:"22000" , descripcion: "Hp 500x"},
  { nombre:"Smartphone" , precio:"130000" , descripcion: "Xiaomi redmi 10"}];

  
}
