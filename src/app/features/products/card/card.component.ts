import { Component, EventEmitter, Input, Output, input } from '@angular/core';

import { Product } from '../../../shared/models/product.interface';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  //InputSignal<Product>
  product = input.required<Product>();
  // @Input({ required: true }) product!: Product;
  @Output() addToCartEvent = new EventEmitter<Product>();

  onAddToCart(): void {
    this.addToCartEvent.emit(this.product());
  }
}
