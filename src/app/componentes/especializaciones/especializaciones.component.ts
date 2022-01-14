import { Component, OnInit } from '@angular/core';
import { PortfolioService } from 'src/app/servicios/portfolio.service';

@Component({
  selector: 'app-especializaciones',
  templateUrl: './especializaciones.component.html',
  styleUrls: ['./especializaciones.component.css']
})
export class EspecializacionesComponent implements OnInit {
  especializacionesList: any;
  constructor(private datosporfolio: PortfolioService) { }

  ngOnInit(): void {
    this.datosporfolio.obtenerDatos().subscribe(data => {
      this.especializacionesList = data.especializaciones;
    })
  }

}
