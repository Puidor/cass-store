import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart-service';
import { RouterLink } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-cart',
  imports: [CommonModule, CurrencyPipe, RouterLink],
  templateUrl: './cart.html',
  styleUrl: './cart.scss',
})
export class Cart {
  cartService = inject(CartService);

  cartItems = this.cartService.cartItems;
  totalPrice = this.cartService.totalPrice;

  removeItem(productId: number): void {
    this.cartService.removeFromCart(productId);
  }
}
