import { Component} from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-formulario-notas',
  templateUrl: './formulario-notas.component.html',
  styleUrls: ['./formulario-notas.component.css']
})
export class FormularioNotasComponent  {
  salida!: string;
  mensaje!: string;
  aprobado!: string;

  promedio!: number;
  notaPresentacion!:number;


  notas!: any

  formulario = new FormGroup({
    rut: new FormControl(''),
    nombre: new FormControl(''),
    notas: new FormGroup({
      nota1: new FormControl(''),
      nota2: new FormControl(''),
      nota3: new FormControl(''),
      nota4: new FormControl(''),
      examen: new FormControl(''),
    })
 });

 enviar(){
  let nota1 = parseInt(this.formulario.value.notas.nota1);
  let nota2 = parseInt(this.formulario.value.notas.nota2);
  let nota3 = parseInt(this.formulario.value.notas.nota3);
  let nota4 = parseInt(this.formulario.value.notas.nota4);
  let examen = parseInt(this.formulario.value.notas.examen);


  if(nota1>=40 && nota2>=40 && nota3>=40 && nota4>=40){
    this.promedio = (nota1+nota2+nota3+nota4)/4;
    this.notaPresentacion = this.promedio*0.7;
    this.salida = "El usuario con nombre: " + this.formulario.value.nombre + ", Rut: " + this.formulario.value.rut  + ", debe realizar el examen, se presenta con una nota de presentacion de: " + this.promedio ;
    this.notaPresentacion = this.notaPresentacion + (examen*0.3);

    this.notas = `Nota 1 =${nota1}
    Nota 2 = ${nota2}
    Nota 3 = ${nota3}
    Nota 4 = ${nota4}
    examen = ${examen}`
    ;


    if(this.notaPresentacion>=40){
      this.mensaje = "" + this.notaPresentacion ;
      this.aprobado = "Aprobado";
    }
    else{
      this.mensaje = "El alumno reprueba con una nota final de: " + this.notaPresentacion ;
      this.aprobado = "Reprobado";
    }

  }
  else{
  this.salida = "El alumno reprueba el curso, posee una nota inferior a 4, por lo que la nota del examen no se tomará en cuenta";
  this.aprobado = "Reprobado";
  this.notaPresentacion = (nota1+nota2+nota3+nota4)/4;
  this.mensaje = "El alumno reprueba con una nota final de: " + this.notaPresentacion ;
  this.notas = `Nota 1 =${nota1}
  Nota 2 = ${nota2}
  Nota 3 = ${nota3}
  Nota 4 = ${nota4}`;
  }
}


 
}

