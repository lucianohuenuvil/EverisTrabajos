import { Component } from '@angular/core';


@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent{

  i = 1;

  aumentar(){
    this.i++;
  }

  disminuir(){
    this.i--;
  }
}
