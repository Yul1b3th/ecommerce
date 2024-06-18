import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { CardComponent } from './card/card.component';
import { ProductsService } from '@api/product.service';
import { Product } from '@shared/models/product.interface';
import { CartStore } from '../../shared/store/shopping-cart.store';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule, CardComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.scss'
})
export default class ProductsComponent {
  private readonly productSvc = inject(ProductsService);
  products = this.productSvc.products;
  CartStore = inject(CartStore);

  onAddToCart(product: Product): void{
    this.CartStore.addToCart(product);
  }
}
