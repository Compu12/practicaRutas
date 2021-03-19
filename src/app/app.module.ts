import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EncabezadoComponent } from './encabezado/encabezado.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { Contenido2Component } from './contenido2/contenido2.component';
import { PiepaginaComponent } from './piepagina/piepagina.component';
import { ContactoComponent } from './contacto/contacto.component';
import { TitulosComponent } from './titulos/titulos.component';
import { PipesComponent } from './pipes/pipes.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { PaginaerrorComponent } from './paginaerror/paginaerror.component';
import { UsuariosComponent } from './usuarios/usuarios.component';
import { AgregarusuariosComponent } from './usuarios/agregarusuarios/agregarusuarios.component';
import { EditarusuariosComponent } from './usuarios/editarusuarios/editarusuarios.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponent,
    ContenidoComponent,
    Contenido2Component,
    PiepaginaComponent,
    ContactoComponent,
    TitulosComponent,
    PipesComponent,
    EjemploComponent,
    DirectivasComponent,
    PaginaerrorComponent,
    UsuariosComponent,
    AgregarusuariosComponent,
    EditarusuariosComponent,
    ArticuloComponent,
    ArticuloDetalleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
