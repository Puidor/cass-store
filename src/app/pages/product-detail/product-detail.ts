import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule, CurrencyPipe } from '@angular/common';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product-detail',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './product-detail.html',
  styleUrl: './product-detail.scss',
})
export class ProductDetail implements OnInit {
  private route = inject(ActivatedRoute);
  private productService = inject(ProductService);

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
    // Lógica para adicionar ao carrinho virá aqui
    console.log('Produto adicionado:', this.product);
  }
}
