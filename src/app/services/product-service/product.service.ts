import { Injectable } from '@angular/core';
import CatalogProduct, { Colors, Status } from '../../model/CatalogProduct';
import { Observable, of } from 'rxjs';
import { products } from '../../mock-product-list';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private productList: CatalogProduct[] = products;
  constructor() {}

  getProducts(): Observable<CatalogProduct[]> {
    return of(this.productList);
  }
}
