import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArticuloDetalleComponent } from './articulo-detalle/articulo-detalle.component';
import { ArticuloComponent } from './articulo/articulo.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ContenidoComponent } from './contenido/contenido.component';
import { DirectivasComponent } from './directivas/directivas.component';
import { EjemploComponent } from './ejemplo/ejemplo.component';
import { PaginaerrorComponent } from './paginaerror/paginaerror.component';
import { PipesComponent } from './pipes/pipes.component';
import { TitulosComponent } from './titulos/titulos.component';
import { AgregarusuariosComponent } from './usuarios/agregarusuarios/agregarusuarios.component';
import { EditarusuariosComponent } from './usuarios/editarusuarios/editarusuarios.component';
import { UsuariosComponent } from './usuarios/usuarios.component';

const routes: Routes = [
  {path:'', component:TitulosComponent},
  {path:'pipes',component:PipesComponent},
  {path:'ejemplo',component:EjemploComponent},
  {path:'directivas',component:DirectivasComponent},
  //ruta padre
  {path:'usuarios',component:UsuariosComponent,
  children:[
    {path:'agregar',component:AgregarusuariosComponent},
    {path:'editar',component:EditarusuariosComponent},
  ]},

  {path:'articulo',component:ArticuloComponent},

  {path:'articulodetalle/:nombre/:precio',component:ArticuloDetalleComponent},

  {path:'**',component:PaginaerrorComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
