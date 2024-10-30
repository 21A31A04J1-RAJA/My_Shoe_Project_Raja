export default class CartProduct {
  constructor(
    private id: number,
    private code: string,
    private name: string,
    private title: string,
    private description: string,
    private details: string[],
    private features: string[],
    private price: number,
    private category: string,
    private color: Colors,
    private size: string,
    private image: string,
    private createdAt: Date,
    private updatedAt: Date,
    private discount?: number
  ) {}
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
