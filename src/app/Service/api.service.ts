import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private httpClient: HttpClient) {}
  public apiUrl = 'http://localhost:8000';
  postProduct(data: unknown) {
    return this.httpClient.post<any>(`${this.apiUrl}/productList`, data);
  }

  getProduct() {
    return this.httpClient.get<any>(`${this.apiUrl}/productList`);
  }
}
