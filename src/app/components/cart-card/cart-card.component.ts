import { CommonModule } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import CartProduct from '../../model/CartProduct';

@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.scss',
})
export class CartCardComponent {
  constructor() {}

  quantityItems: number = 1;

  @Input() product!: CartProduct;

  addItem() {
    this.quantityItems += 1;
    if (this.quantityItems > 10) this.quantityItems = 10;
  }
  removeItem() {
    this.quantityItems -= 1;
    if (this.quantityItems < 1) this.quantityItems = 0;
  }
}
