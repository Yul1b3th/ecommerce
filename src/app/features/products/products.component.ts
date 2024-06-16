import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';

import { CardComponent } from './card/card.component';
import { ProductsService } from '@api/product.service';

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
}
