import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduct } from '../models/i-product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private apiUrl = 'https://dummyjson.com/products';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<IProduct[]>(this.apiUrl);
  }

  // Altri metodi del servizio se necessario

  saveToFavorites(product: IProduct): void {
    // Implementa la logica per salvare il prodotto nei preferiti
  }
}
