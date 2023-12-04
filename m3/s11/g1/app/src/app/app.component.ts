import { Component, OnInit } from '@angular/core';
import { ProductService } from './services/product.service';
import { IProduct } from './models/i-product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  products: IProduct[] = [];

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.productService.getAll().subscribe(data => {
      this.products = data;
    });
  }

  addToFavorites(product: IProduct): void {
    this.productService.saveToFavorites(product);
    // Puoi implementare la logica per gestire l'aggiunta ai preferiti
  }
}
