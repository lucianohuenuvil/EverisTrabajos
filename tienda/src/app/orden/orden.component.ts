import { Component, OnInit } from '@angular/core';
import { TotalService } from '../total.service';

@Component({
  selector: 'app-orden',
  templateUrl: './orden.component.html',
  styleUrls: ['./orden.component.css']
})
export class OrdenComponent implements OnInit {

  constructor(private _servicio:TotalService) { }

  ngOnInit(): void {

    console.log(this._servicio.getArrayTarjeta())
    console.log(this._servicio.getArrayDireccion())
  }



}
