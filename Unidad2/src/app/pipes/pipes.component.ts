import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.css']
})
export class PipesComponent implements OnInit {


  lista:string[]=["Lunes","Martes", "Miercoles", "Jueves", "Viernes"];

  elementos = [
    {codigo:1001, nombreProducto:"Tallarines", precio:850},
    {codigo:1002, nombreProducto:"Bebidas",precio:1500}
  ]

  fecha = new Date();


  constructor() { }

  ngOnInit(): void {
  }

}
