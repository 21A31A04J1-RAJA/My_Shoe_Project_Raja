import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import CartProduct from '../../model/CartProduct';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private displayToast = new Subject<CartProduct>();
  displaytoast$ = this.displayToast.asObservable();

  showToast(product: CartProduct): void {
    this.displayToast.next(product);
  }
}
