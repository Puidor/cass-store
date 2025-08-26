// src/app/services/cart.service.ts
import { Injectable, signal, computed } from '@angular/core';
import { ProductModel } from '../models/product-model';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cartItems = signal<ProductModel[]>([]);

  totalItems = computed(() => this.cartItems().length);

  totalPrice = computed(() => {
    return this.cartItems().reduce((acc, product) => acc + product.price, 0);
  });

  constructor() {}

  addToCart(product: ProductModel) {
    this.cartItems.update((items) => [...items, product]);
    console.log('Carrinho atualizado:', this.cartItems());
  }

  removeFromCart(productId: number) {
    this.cartItems.update((items) => {
      const indexToRemove = items.findIndex((item) => item.id === productId);

      if (indexToRemove > -1) {
        const newItems = [...items];
        newItems.splice(indexToRemove, 1);
        return newItems;
      }

      return items;
    });
  }
}
