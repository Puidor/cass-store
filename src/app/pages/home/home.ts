import { CommonModule } from '@angular/common';
import { Component, inject, OnInit } from '@angular/core';
import { ProductCard } from '../../components/product-card/product-card';
import { ProductService } from '../../services/product-service';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-home',
  imports: [CommonModule, ProductCard],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home implements OnInit {
  private productService = inject(ProductService);
  products: ProductModel[] = [];

  ngOnInit(): void {
    this.productService.getAllProducts().subscribe((data) => {
      this.products = data;
    });
  }
}
