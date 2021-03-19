import { Component, OnInit } from '@angular/core';
import { Articulo } from '../models/articulo.interface';

@Component({
  selector: 'app-articulo',
  templateUrl: './articulo.component.html',
  styleUrls: ['./articulo.component.css']
})
export class ArticuloComponent implements OnInit {

  //variables 
  //generico de tipo articulo
  articulos: Array<Articulo> = new Array<Articulo>();
  constructor() { }

  ngOnInit(): void {
    this.articulos.push(
      { nombre: "PC con Win10", descripcion: "Marca Lenovo", precio: 900 },
      { nombre: "Mac Book Pro", descripcion: "Laptop con pantalla retina de Apple", precio: 2000 },
      { nombre: "Tablet de 10 pulgadas", descripcion: "Marca Samsumg de segunda deneración", precio: 900 },

    );
  }

}

