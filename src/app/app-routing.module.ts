import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ListadoVentaComponent } from './listado-venta/listado-venta.component';
import { ListadoVentaNormalComponent } from './listado-venta-normal/listado-venta-normal.component';
import { ListadoVentaSubastaComponent } from './listado-venta-subasta/listado-venta-subasta.component';
import { SubirOfertaComponent } from './subir-oferta/subir-oferta.component';
import { ExitoLoginComponent } from './exito-login/exito-login.component';
import { ExitoCompraComponent } from './exito-compra/exito-compra.component';
import { ExitoPublicacionComponent } from './exito-publicacion/exito-publicacion.component';

const routes: Routes = [
  // { path: environment.routes.error, component: ErrorComponent },
  // { path: environment.routes.nuevaSolicitud, component: FormularioComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bienvenida', component: BienvenidoComponent },
  { path: 'listado-venta', component: ListadoVentaComponent },
  { path: 'listado-venta-normal', component: ListadoVentaNormalComponent },
  { path: 'listado-venta-subasta', component: ListadoVentaSubastaComponent },
  { path: 'subir-oferta', component: SubirOfertaComponent },
  { path: 'exito-login', component: ExitoLoginComponent },
  { path: 'exito-compra', component: ExitoCompraComponent },
  { path: 'exito-publicacion', component: ExitoPublicacionComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '*', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
