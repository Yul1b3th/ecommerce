import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ProductsService } from '@api/product.service';
import { HeaderComponent } from './layout/header/header.component';
import SpinnerComponent from '@shared/components/spinner.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, HeaderComponent, SpinnerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  // private readonly productSvc = inject(ProductsService);
  // products = this.productSvc.products;
}
