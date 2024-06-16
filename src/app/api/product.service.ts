import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable, inject, signal } from '@angular/core';

import { environment } from '@envs/environment.development';
import { Product } from '@shared/models/product.interface';
import { log } from 'console';
import { tap } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ProductsService {
  // Crea una Signal para el listado del producto
  public products = signal<Product[]>([]);

  // Inyecta el servicio HttpClient en la clase ProductsService
  // Esta inyección permite que ProductsService utilice el servicio HttpClient para interactuar con servidores web
  // y realizar operaciones HTTP como GET, POST, PUT, DELETE, etc.
  private readonly _http = inject(HttpClient);
  private readonly _endPoint = environment.apiURL;
    private readonly _injector = inject(EnvironmentInjector);

  constructor() {
    console.log(this.products());

    this.getProducts();
    console.log(this.products());
  }

  // Métodos para obtener productos
  public getProducts(): void {
    this._http
      .get<Product[]>(`${this._endPoint}/products/?sort=desc`)
      .pipe(tap((data: Product[]) => this.products.set(data)))
      .subscribe();

  }

  // Métodos para obtener un producto por ID
  public getProductById(id: number) {
    return this._http.get<Product>(`${this._endPoint}/products/${id}`);
  }
}
