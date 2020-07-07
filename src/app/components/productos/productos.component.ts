import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../servicios/productos.service';
import { Router } from '@angular/router';
import { Producto } from '../../models/producto.model';

import { CPU } from '../../models/CPU.model';
import { GraphicTablet } from '../../models/GraphicTablet.model';
import { InjectionPrinter } from '../../models/InjectionPrinter.model';
import { Keyboard } from '../../models/Keyboard.model';
import { LaserPrinter } from '../../models/LaserPrinter.model';
import { Mouse } from '../../models/Mouse.model';


@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  productos:Producto[] = [];

  cpus: CPU[] = CPU.getCPUs();
  tablets: GraphicTablet[] = GraphicTablet.getTablets();
  printers1: InjectionPrinter[] = InjectionPrinter.getPrinters();
  keyboards: Keyboard[] = Keyboard.getKeyboards();
  printers2: LaserPrinter[] = LaserPrinter.getPrinters();
  mouses: Mouse[] = Mouse.getMouses();

  constructor(private _productosService:ProductosService,
              private router:Router,) { }

  ngOnInit(): void {
    
    this.productos = this._productosService.getProductos();
  }

  verCarrito(){
    this.router.navigate( ['/carrito'] );
  }

}
