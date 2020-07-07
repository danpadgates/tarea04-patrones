import { Component, OnInit } from '@angular/core';
import { Carrito } from '../../models/carrito.model';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  public carroVenta: Carrito[];
  public total: number = 0;

  constructor(private productosservice: ProductosService) {
    this.carroVenta = this.productosservice.getCarrito();
    this.total = this.productosservice.getPrice();
  }

  ngOnInit(): void {
  }

}
