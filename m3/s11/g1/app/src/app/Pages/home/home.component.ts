import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { IProduct } from '../../models/i-product';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit{
  addToFavorites(_t9: any) {
    throw new Error('Method not implemented.');
    }
products: IProduct[]= []
constructor(private productService : ProductService){}
ngOnInit(): void {
  this.productService.getAll().subscribe(res => {
    this.products = res.products;
    console.log(this.products)
  })
}

}
