export default interface CatalogProduct {
  id: string;
  code: string;
  name: string;
  title: string;
  description: string;
  details: string[];
  features: string[];
  price: number;
  category: string;
  variants: ItemVariant[];
  image: string;
  status: Status;
  discount?: number;
  createdAt: Date;
  updatedAt: Date;
}

export interface ItemVariant {
  color: Colors;
  sizeStock: SizeStock[];
}

export interface SizeStock {
  id: string;
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
  INDIGO = 'INDIGO',
  GRAY = 'GRAY',
  ORANGE = 'ORANGE',
  PINK = 'PINK',
}
