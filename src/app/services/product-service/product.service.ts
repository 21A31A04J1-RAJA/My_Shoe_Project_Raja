import { Injectable } from '@angular/core';
import CatalogProduct from '../../model/CatalogProduct';
import { catchError, Observable, of, tap, throwError } from 'rxjs';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root',
})
export class ProductService {
  private url: string = 'http://localhost:8080/api/products';

  constructor(private http: HttpClient) {}

  getProducts(): Observable<CatalogProduct[]> {
    return this.http.get<CatalogProduct[]>(`${this.url}`).pipe(
      tap((product) => {}),
      catchError((error) => {
        console.error('Error fetching products', error);
        return throwError(() => new Error('Failed fetch'));
      })
    );
  }

  getProductById(productId: string): Observable<CatalogProduct> {
    return this.http.get<CatalogProduct>(`${this.url}/${productId}`).pipe(
      tap((product) => {
        console.log(product);
      }),
      catchError((error) => {
        console.error('Error fetching products', error);
        return throwError(() => new Error('Failed fetch'));
      })
    );
  }

  upDateProduct(catalogProduct: CatalogProduct): Observable<CatalogProduct> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http
      .put<CatalogProduct>(
        `${this.url}/${catalogProduct.id}`,
        catalogProduct,
        httpOptions
      )
      .pipe(
        catchError((error) => {
          console.warn(error, 'Error while saving the product');

          return throwError(() => new Error('Error while saving the product'));
        })
      );
  }
}
