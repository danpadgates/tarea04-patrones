import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Producto } from '../../models/producto.model';
import { ProductosService } from '../../servicios/productos.service';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-producto-tarjeta',
  templateUrl: './producto-tarjeta.component.html',
  styleUrls: ['./producto-tarjeta.component.css']
})
export class ProductoTarjetaComponent implements OnInit {

  carrito: any[] = [];
  numero: number;

  @Input() producto: any = {};


  constructor(
    private router: Router,
    private _productoService: ProductosService,
  ) {

  }

  ngOnInit(): void {
  }

  agregarCarrito(cantidad: number, producto: any) {
    this._productoService.addCarrito(cantidad, producto);
  
    const Toast = Swal.mixin({
      toast: true,
      position: 'top-end',
      showConfirmButton: false,
      timer: 3000,
      timerProgressBar: true,
      onOpen: (toast) => {
        toast.addEventListener('mouseenter', Swal.stopTimer)
        toast.addEventListener('mouseleave', Swal.resumeTimer)
      }
    })
    
    Toast.fire({
      icon: 'success',
      title: 'Item añadido al carrito'
    })
  }


}
