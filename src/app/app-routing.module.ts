import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ListadoVentaComponent } from './listado-venta/listado-venta.component';

const routes: Routes = [
  // { path: environment.routes.error, component: ErrorComponent },
  // { path: environment.routes.nuevaSolicitud, component: FormularioComponent },
  { path: 'home', component: HomeComponent },
  { path: 'registro', component: RegistroComponent },
  { path: 'login', component: LoginComponent },
  { path: 'bienvenida', component: BienvenidoComponent },
  { path: 'listado-ventas', component: ListadoVentaComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  // { path: '*', component: FormularioComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
