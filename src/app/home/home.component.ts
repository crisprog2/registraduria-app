import { Component, OnInit } from '@angular/core';
import { Consulta } from './consulta';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  public consulta: Consulta = new Consulta()

  constructor() {  }

  ngOnInit(): void {

  }

}
