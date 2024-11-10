import { Injectable } from '@angular/core';
import CartProduct from '../../model/CartProduct';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private listOfProducts = new BehaviorSubject<CartProduct[]>([]);
  listOfProducts$ = this.listOfProducts.asObservable();

  private total = new BehaviorSubject<number>(0);
  total$ = this.total.asObservable();

  quantityOfProductsInCart: number = 0;

  constructor() {}

  addProductToCart(product: CartProduct) {
    const productIndex = this.listOfProducts
      .getValue()
      .findIndex(
        (item) =>
          item.id === product.id &&
          item.color === product.color &&
          item.size === product.size
      );
    console.log(productIndex);

    if (productIndex != -1) {
      this.listOfProducts.getValue()[productIndex].updateQuantity();
    } else {
      const updateProducts = [
        ...this.listOfProducts.getValue(),
        new CartProduct(
          product.id,
          product.code,
          product.name,
          product.title,
          product.description,
          product.details,
          product.features,
          product.price,
          product.category,
          product.color,
          product.size,
          product.image,
          product.createdAt,
          product.updatedAt,
          product.discount
        ),
      ];
      this.listOfProducts.next(updateProducts);
    }
    this.calculateTotal();
  }

  removeProductFromListOfProduct(product: CartProduct): void {
    this.listOfProducts.next(
      this.listOfProducts.getValue().filter((item) => item.id != product.id)
    );
  }

  calculateTotal() {
    this.total.next(
      this.listOfProducts.getValue().reduce((acc, product) => {
        return product.quantity * product.price + acc;
      }, 0)
    );
  }
}
