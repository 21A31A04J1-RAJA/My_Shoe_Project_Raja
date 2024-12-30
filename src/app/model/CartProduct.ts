export default class CartProduct {
  public quantity: number = 1;
  constructor(
    public id: string,
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
  }

  public updateQuantity(): void {
    this.quantity += 1;
    if (this.quantity > 10) this.quantity = 10;
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
