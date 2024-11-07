export default class CartProduct {
  public quantity: number;
  constructor(
    public id: number,
    public code: string,
    public name: string,
    public title: string,
    public description: string,
    public details: string[],
    public features: string[],
    public price: number,
    public category: string,
    public color: Colors,
    public size: string,
    public image: string,
    public createdAt: Date,
    public updatedAt: Date,
    public discount?: number
  ) {
    this.createdAt = new Date();
    this.quantity = 0;
  }
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
