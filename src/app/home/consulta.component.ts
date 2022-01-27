import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Consulta } from './consulta';
import { HomeService } from './home.service';

@Component({
  selector: 'app-consulta',
  templateUrl: './consulta.component.html'
})
export class ConsultaComponent implements OnInit {

  public consulta: Consulta = new Consulta()

  constructor(private homeService: HomeService, private router: Router, private activatedRoute: ActivatedRoute) {  }

  ngOnInit(): void {

    this.activatedRoute.params.subscribe(params => {
      let id = params['id']
      if(id){
        this.homeService.getConsulta(id).subscribe(
          consulta=>this.consulta=consulta
        )
      }
    })
  }

}
