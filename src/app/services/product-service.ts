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

  getAllProducts(): Observable<ProductModel[]> {
    return this.http.get<ProductModel[]>(`${this.apiUrl}/products`);
  }

  getProductById(id: number): Observable<ProductModel> {
    return this.http.get<ProductModel>(`${this.apiUrl}/products/${id}`);
  }

  deleteProduct(id: number): Observable<ProductModel> {
    return this.http.delete<ProductModel>(`${this.apiUrl}/products/${id}`);
  }
}
