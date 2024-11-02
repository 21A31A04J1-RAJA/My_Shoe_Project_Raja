import { Component, Input, OnInit } from '@angular/core';
import { CartCardComponent } from '../../components/cart-card/cart-card.component';
import CartProduct from '../../model/CartProduct';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CartCardComponent],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  constructor(private cartService: CartService) {}

  @Input() products: CartProduct[] = [];

  ngOnInit(): void {
    this.cartService.listOfProducts$.subscribe((value) => {
      this.products = value;
    });
  }
}
