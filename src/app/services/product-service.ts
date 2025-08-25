import { ProductModel } from './../models/product-model';
import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private readonly apiUrl = 'https://fakestoreapi.com';
  private http = inject(HttpClient);

  constructor() {}

  // Busca todos os produtos
  getAllProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.apiUrl}/products`);
  }

  // Busca um produto específico pelo ID
  getProductById(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.apiUrl}/products/${id}`);
  }
}
