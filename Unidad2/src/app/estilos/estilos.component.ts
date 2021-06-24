import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-estilos',
  templateUrl: './estilos.component.html',
  styleUrls: ['./estilos.component.css']
})
export class EstilosComponent implements OnInit {

  visual = {
    'estilo1 estilo2':false
  }

  largo = 30;

  objeto = {
    "color":"white",
    "height.px":"180",
    "width.px":"700",
    "font-size.px":this.largo,
    "background-color":"green"
  }

  aumentar(){
    this.largo++;
    this.objeto["font-size.px"]=this.largo
  }



  agregar(){

    this.visual['estilo1 estilo2']=true
  }

  borrar(){

    this.visual['estilo1 estilo2']=false
  }


  constructor() { }

  ngOnInit(): void {
  }

}
