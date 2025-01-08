export default interface CatalogProduct {
  id: string;
  code: string;
  name: string;
  title: string;
  description: string;
  details: string[];
  price: number;
  category: string;
  variants: ItemVariant[];
  image: string;
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
