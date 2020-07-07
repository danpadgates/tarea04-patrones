import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { Router } from '@angular/router';
import { Producto } from '../../models/producto.model';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Producto[] = [];

  constructor(private _productosService:ProductosService,
              private router:Router,) { }

  ngOnInit(): void {
    
    this._productosService.getProductos()
    .subscribe(data => {
           this.productos = data;
    })

    console.log("Llego");
    console.log(this.productos);
  }

  verCarrito(){
    this.router.navigate( ['/carrito'] );
  }

}
