import { Injectable } from '@angular/core';
import CatalogProduct from '../../model/CatalogProduct';
import { catchError, Observable, of, tap, throwError } from 'rxjs';

import { HttpClient } from '@angular/common/http';
import { products } from '../../mock-product-list';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url: string = 'http://localhost:8080/api/products';
  private productList = products;
  constructor(private http: HttpClient) {}

  getProducts(): Observable<CatalogProduct[]> {
    // return this.http.get<CatalogProduct[]>(`${this.url}`).pipe(
    //   tap((product) => {}),
    //   catchError((error) => {
    //     console.error('Error fetching products', error);
    //     return throwError(() => new Error('Failed fetch'));
    //   })
    // );
    return of(this.productList);
  }

  getProductById(productId: string): Observable<CatalogProduct> {
    const product = this.productList.find(
      (product) => product.id === productId
    );
    if (product) return of(product);
    return throwError(() => new Error('No product with this id'));
  }
}
