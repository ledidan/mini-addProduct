import { ProductList } from './../../product-list.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  public apiUrl = 'http://localhost:8000';
  postProduct(data: any) {
    return this.httpClient.post<ProductList>(
      `${this.apiUrl}/productList`,
      data
    );
  }

  getProduct() {
    return this.httpClient.get<ProductList>(`${this.apiUrl}/productList`);
  }

  putProduct(id: number, data: any) {
    return this.httpClient.put<ProductList>(
      `${this.apiUrl}/productList/${id}`,
      data
    );
  }
  deleteProduct(id: number) {
    return this.httpClient.delete<ProductList>(
      `${this.apiUrl}/productList/${id}`
    );
  }
}
