import { Component } from '@angular/core';
import { CartCardComponent } from '../../components/cart-card/cart-card.component';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent {}
