import { CommonModule, CurrencyPipe } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { ProductModel } from '../../models/product-model';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, RouterLink, CommonModule],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss',
})
export class ProductCard {
  @Input({ required: true }) product!: ProductModel;
}
