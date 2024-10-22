export default interface Product {
  id: number;
  code: string;
  name: string;
  title: string;
  description: string;
  details: string[];
  features: string[];
  price: number;
  category: string;
  variants: ProductVariant[];
  image: string;
  status: Status;
  discount?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ProductVariant {
  color: Colors;
  sizeStock: SizeStock[];
}

export interface SizeStock {
  size: string;
  stock: number;
}

export enum Status {
  INSTOCK = 'INSTOCK',
  LOWSTOCK = 'LOWSTOCK',
  OUTOFSTOCK = 'OUTOFSTOCK',
}

export enum Colors {
  RED = 'RED',
  BLUE = 'BLUE',
  GREEN = 'GREEN',
  BLACK = 'BLACK',
  WHITE = 'WHITE',
}

// export default class Products {
//   constructor(
//     private id,
//     private code,
//     private name,
//     private title,
//     private description,
//     private details,
//     private price,
//     private category,
//     private variants,
//     private image,
//     private status,
//     private discount,
//     private createdAt,
//     private updatedAt
//   ) {}
// }
