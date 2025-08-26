import { Component, inject, OnInit } from '@angular/core';
import { ProductService } from '../../services/product-service';
import { ProductModel } from '../../models/product-model';
import { CommonModule, CurrencyPipe } from '@angular/common';

@Component({
  selector: 'app-admin',
  imports: [CommonModule, CurrencyPipe],
  templateUrl: './admin.html',
  styleUrl: './admin.scss',
})
export class Admin implements OnInit {
  private productService = inject(ProductService);
  products: ProductModel[] = [];

  ngOnInit(): void {
    this.loadProducts();
  }

  loadProducts(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }

  deleteProduct(productId: number): void {
    if (confirm('Tem certeza que deseja deletar este produto?')) {
      this.productService.deleteProduct(productId).subscribe({
        next: (deletedProduct) => {
          console.log('Produto deletado (simulado):', deletedProduct);

          this.products = this.products.filter((p) => p.id !== productId);

          alert('Produto deletado com sucesso!');
        },
        error: (err) => {
          console.error('Falha ao deletar produto', err);
          alert('Ocorreu um erro ao deletar o produto.');
        },
      });
    }
  }
}
