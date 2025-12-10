import { Routes } from '@angular/router';
import { Home} from './pages/home/home';
import { Products } from './pages/products/products';
import { Cart } from './pages/cart/cart';
import { Login } from './pages/login/login';

export const routes: Routes = [
  { path: '', component: Home },       // Home page
  { path: 'products', component: Products },
  { path: 'cart', component: Cart},
  { path: 'login', component: Login },
  { path: '**', redirectTo: '' }                // Si page inconnue, retourne home
];
