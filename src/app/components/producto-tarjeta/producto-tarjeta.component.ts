import { Component, OnInit, Input} from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../models/producto.model';
import { ProductosService } from '../../servicios/productos.service';

@Component({
  selector: 'app-producto-tarjeta',
  templateUrl: './producto-tarjeta.component.html',
  styleUrls: ['./producto-tarjeta.component.css']
})
export class ProductoTarjetaComponent implements OnInit {

  carrito:any[] = [];
  numero:number;
  // @Input() producto: any = {};
  // @Input() index: number;

    @Input() producto: any = {};


  constructor( private router: Router,  
               private _productoService: ProductosService,
              ) {
  
   }

  ngOnInit(): void {
  }

  agregarCarrito(cantidad:number, producto:Producto){
    
        this._productoService.addCarrito(cantidad, producto);
  }


}
