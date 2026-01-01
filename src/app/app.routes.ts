import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Products } from './pages/products/products';
import { Login } from './pages/login/login';
import { Cart } from './pages/cart/cart';

export const routes: Routes = [
  { path: '', component: Home },        // default page
  { path: 'products', component: Products },
  { path: 'login', component: Login },
  { path: 'cart', component: Cart },
  { path: '**', redirectTo: '' }        // fallback
];
