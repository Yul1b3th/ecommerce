import { HttpClient } from '@angular/common/http';
import { EnvironmentInjector, Injectable, inject, runInInjectionContext, signal } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';

import { environment } from '@envs/environment.development';
import { Product } from '@shared/models/product.interface';
import { map, tap } from 'rxjs/operators';

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
    this.getProducts();
  }

  // Métodos para obtener productos
  public getProducts(): void {
    this._http
      .get<Product[]>(`${this._endPoint}/products/?sort=desc`)
      .pipe(
        map((products: Product[]) =>
          products.map((product: Product) => ({ ...product, qty: 1 }))
        ),
        tap((products: Product[]) => this.products.set(products))
      )
      .subscribe();
  }

  // Métodos para obtener un producto por ID
  public getProductById(id: number) {
    return runInInjectionContext(this._injector, () => toSignal<Product>(this._http.get<Product>(`${this._endPoint}/products/${id}`)));
  }
}
