import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { ProductDetail } from './pages/product-detail/product-detail';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: Home },
  { path: 'product/:id', component: ProductDetail },
];
