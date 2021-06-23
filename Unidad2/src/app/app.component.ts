import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'unidad2';
  nombre = 'Luciano';
  email = 'Lucianobvx@gmail.com'
  edad = 13;
  sueldos = [400000,800000,1200000];
  estado = true;
  notas = [50,60,40,70,66];


  public tienetrabajo(){
    if (this.estado) {
      return 'Tiene trabajo';
      
    }
    else{
      return 'No tiene trabajo';
    }
  }

  public sumasueldos(){
    let suma = 0;
    for(let i=0; i<this.sueldos.length; i++){
      suma = suma + this.sueldos[i];
    }
    return suma;
  }

  calcularPromedio(){
    let suma = 0
    let promedio = 0
    for(let i=0; i<this.notas.length; i++)
    {
      suma = suma + this.notas[i]
    }
    promedio = suma/this.notas.length
    return promedio
  }

}
