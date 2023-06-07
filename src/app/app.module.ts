import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { RegistroComponent } from './registro/registro.component';
import { LoginComponent } from './login/login.component';
import { BienvenidoComponent } from './bienvenido/bienvenido.component';
import { ListadoVentaComponent } from './listado-venta/listado-venta.component';
import { ListadoVentaNormalComponent } from './listado-venta-normal/listado-venta-normal.component';
import { ListadoVentaSubastaComponent } from './listado-venta-subasta/listado-venta-subasta.component';
import { SubirOfertaComponent } from './subir-oferta/subir-oferta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RegistroComponent,
    LoginComponent,
    BienvenidoComponent,
    ListadoVentaComponent,
    ListadoVentaNormalComponent,
    ListadoVentaSubastaComponent,
    SubirOfertaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
