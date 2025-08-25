import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProductModel } from '../../models/product-model';
import { CartService } from '../../services/cart-service';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);
  private cartService = inject(CartService);

  product: ProductModel | null = null;

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');
    if (productId) {
      this.productService.getProductById(+productId).subscribe((data) => {
        this.product = data;
      });
    }
  }

  addToCart(): void {
    if (this.product) {
      this.cartService.addToCart(this.product);
      alert('Produto adicionado ao carrinho!');
    }
  }
}
