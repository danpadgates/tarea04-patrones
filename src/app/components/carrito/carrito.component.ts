import { Component, OnInit } from '@angular/core';
import { Carrito } from '../../models/carrito.model';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {
  
  

  constructor( private productosservice: ProductosService) { }

  ngOnInit(): void {
  }

  carroVenta:Carrito[] = this.productosservice.getCarrito();

  
  
}
