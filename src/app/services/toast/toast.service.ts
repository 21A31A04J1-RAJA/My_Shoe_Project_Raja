import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  private displayToast = new Subject();
  displaytoast$ = this.displayToast.asObservable();

  constructor() {}

  showToast(product: any): void {
    console.log('Service Toast');

    this.displayToast.next(product);
  }
}
