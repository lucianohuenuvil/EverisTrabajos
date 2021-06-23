import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-azar',
  templateUrl: './azar.component.html',
  styleUrls: ['./azar.component.css']
})
export class AzarComponent implements OnInit {

  valor!: number;
  valorNumber = 0;
  numero = [] as number[];
  repetido= false;

  constructor() { }

  ngOnInit(): void {

    for (let j=0; j<15; j++){
      this.repetido=false;
      
      this.valorNumber = Math.trunc(Math.random()*25+1);
      for (let i of this.numero){
        if(this.valorNumber == this.numero[i]){
          console.log("repetido");
          this.repetido=true;

        }
      }

      if(this.repetido==true){
        j = j-1;
      }
      else{
        this.numero.push(this.valorNumber);        
      }

    }
    
  }

}
