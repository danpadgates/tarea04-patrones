import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { HttpClientModule } from "@angular/common/http";


import { AppComponent } from './app.component';


import { APP_ROUTING } from './app-routing.module'

import { LoginComponent } from './components/login/login.component';
import { ProductosService } from './servicios/productos.service';
import { ProductosComponent } from './components/productos/productos.component';
import { ProductoTarjetaComponent } from './components/producto-tarjeta/producto-tarjeta.component';
import { CarritoComponent } from './components/carrito/carrito.component';







@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ProductoTarjetaComponent,
    LoginComponent,
    CarritoComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    APP_ROUTING,
    HttpClientModule
   
  ],
  providers: [
    ProductosService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
