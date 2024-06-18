import { computed, inject } from '@angular/core';
import {
  patchState,
  signalStore,
  withComputed,
  withMethods,
  withState,
} from '@ngrx/signals';
import { Product } from '@shared/models/product.interface';
import { ToastrService } from 'ngx-toastr';

// Interfaz para definir las propiedades del store
export interface CartStore {
  products: Product[];
  totalAmount: number;
  productsCount: number;
}

// Valor inicial para el estado del store
const initialState: CartStore = {
  products: [],
  totalAmount: 0,
  productsCount: 0,
};

export const CartStore = signalStore(
  { providedIn: 'root' },
  withState(initialState),
  withComputed(({ products }) => ({
    productsCount: computed(() => calculateProductCount(products())),
    totalAmount: computed(() => calculateTotalAmount(products())),
  })),
  withMethods(({ products, ...store }, toastSvc = inject(ToastrService)) => ({
    addToCart(product: Product) {
      const isProductInCart = products().find(
        (item: Product) => item.id === product.id
      );

      if (isProductInCart) {
        isProductInCart.qty++;
        isProductInCart.subTotal = isProductInCart.qty * isProductInCart.price;
        patchState(store, { products: [...products()] });
      } else {
        patchState(store, { products: [...products(), product] });
      }
      toastSvc.success('Product added', 'E-Commerce');
    },
    removeFromCart(id: number) {
      const updatedProducts = products().filter((product) => product.id !== id);
      patchState(store, { products: updatedProducts });
      toastSvc.info('Product removed', 'E-Commerce');
    },
    clearCart() {
      patchState(store, initialState);
      toastSvc.info('Cart cleared', 'E-Commerce');
    },
  }))
);

function calculateTotalAmount(products: Product[]): number {
  return products.reduce(
    (acc, product) => acc + product.price * product.qty,
    0
  );
}

function calculateProductCount(products: Product[]): number {
  return products.reduce((acc, product) => acc + product.qty, 0);
}

