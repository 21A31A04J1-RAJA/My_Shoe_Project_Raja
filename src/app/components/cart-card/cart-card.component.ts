import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cart-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart-card.component.html',
  styleUrl: './cart-card.component.scss',
})
export class CartCardComponent {
  quantityItems: number = 1;

  addItem() {
    this.quantityItems += 1;
    if (this.quantityItems > 10) this.quantityItems = 10;
  }
  removeItem() {
    this.quantityItems -= 1;
    if (this.quantityItems < 1) this.quantityItems = 0;
  }
}
