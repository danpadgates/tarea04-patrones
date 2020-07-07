import { Injectable } from '@angular/core';
import { Producto } from '../models/producto.model';

import { Carrito } from '../models/carrito.model';



@Injectable()

export class ProductosService {

  private carrito: Carrito[] = [];
  private products: Producto[] = [];

  constructor() {
  }

  getProductos(): Producto[] {
    return this.products;
  }

  addCarrito(cant: number, producto: any) {

    const carro = {
      producto,
      cantidad: cant,
    };


    this.carrito.push(carro);
  }

  getCarrito() {
    return this.carrito;
  }

  getPrice():number{
    let total:number = 0;

    for(let i=0;i<this.carrito.length;i++){
      total += this.carrito[i].cantidad * this.carrito[i].producto.price;
    }

    return total;
  }

}



