import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';
import { HttpClient } from '@angular/common/http';

import { Carrito } from '../models/carrito.model';



@Injectable()

export class ProductosService {

  private carrito:Carrito[] = [];
  private products: Producto[] = [];
  
    

  constructor(public http: HttpClient) {

    const SERVICES_URL = 'http://localhost:8080/Semana3';

    const url = SERVICES_URL + '/productos';
    this.http.get(url)
        .subscribe((data: Producto[]) => {
            this.products = data;
            console.log(this.products);
            console.log('toy grande');
        })
}
   

getProductos(){

  const SERVICES_URL = 'http://localhost:8080/Semana3';  
  const url = SERVICES_URL + '/productos';
  return this.http.get<Producto[]>(url)

}

addCarrito(cant:number, producto:Producto){

   const carro = {
     producto,
     cantidad : cant,
   };
    

    this.carrito.push(carro);

    console.log(this.carrito);
}

getCarrito(){
  return this.carrito;
}

}



