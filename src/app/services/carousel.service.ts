import { Injectable } from '@angular/core';
import Product from '../model/product'; // Assuming you have a Product model

@Injectable({
  providedIn: 'root',
})
export class CarouselService {
  constructor() {}

  // Corrected method to return an array of products
  getProductsSmall(): Product[] {
    return [
      {
        id: 1,
        name: 'Running Shoes 1',
        description: 'Air Pro X1',
        image: 'shoes1.png',
        price: 19.99,
        status: 'INSTOCK',
      },
      {
        id: 2,
        name: 'Running Shoes 2',
        description: 'Air Pro X2',
        image: 'shoes2.png',
        price: 27.99,
        status: 'INSTOCK',
      },
      {
        id: 3,
        name: 'Running Shoes 3',
        description: 'Air Pro X3',
        image: 'shoes3.png',
        price: 29.99,
        status: 'INSTOCK',
      },
      {
        id: 4,
        name: 'Running Shoes 4',
        description: 'Air Pro X4',
        image: 'shoes4.png',
        price: 39.99,
        status: 'INSTOCK',
      },
      {
        id: 5,
        name: 'Running Shoes 5',
        description: 'Air Pro X5',
        image: 'shoes5.png',
        price: 59.99,
        status: 'INSTOCK',
      },
      {
        id: 6,
        name: 'Running Shoes 6',
        description: 'Air Pro X6',
        image: 'shoes1.png',
        price: 15.99,
        status: 'INSTOCK',
      },
      {
        id: 7,
        name: 'Running Shoes 7',
        description: 'Air Pro X7',
        image: 'shoes2.png',
        price: 22.99,
        status: 'INSTOCK',
      },
      {
        id: 8,
        name: 'Running Shoes 8',
        description: 'Air Pro X8',
        image: 'shoes3.png',
        price: 58.99,
        status: 'INSTOCK',
      },
      {
        id: 9,
        name: 'Running Shoes 9',
        description: 'Air Pro X9',
        image: 'shoes4.png',
        price: 12.99,
        status: 'INSTOCK',
      },
    ];
  }
}
