import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Articulo } from '../models/articulo.interface';

@Component({
  selector: 'app-articulo-detalle',
  templateUrl: './articulo-detalle.component.html',
  styleUrls: ['./articulo-detalle.component.css']
})
export class ArticuloDetalleComponent implements OnInit {
  nombre?:string;
  precio?:number;
  articulo?: Articulo;

  constructor(private ruta: ActivatedRoute) { }

  ngOnInit(): void {
    //recibir todos los parametros
  
  /*    this.nombre= this.ruta.snapshot.params.nombre;
     this.precio= this.ruta.snapshot.params.precio; */

     //recibir la interface con todos los paranetris  que esta en las propiedades

     this.articulo = this.ruta.snapshot.params.articulo;

    

  }

}
