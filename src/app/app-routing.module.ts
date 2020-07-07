
import { Routes, RouterModule } from '@angular/router';

import { LoginComponent } from './components/login/login.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CarritoComponent } from './components/carrito/carrito.component';


const APP_ROUTES: Routes = [

  { path: 'login', component: LoginComponent },
  { path: 'productos', component: ProductosComponent },
  { path: 'carrito', component: CarritoComponent },
  { path: '**', pathMatch:'full', redirectTo:'login' },

];



export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES);
