import { Component, OnInit } from '@angular/core';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-recap',
  standalone: true,
  imports: [],
  templateUrl: './recap.component.html',
  styleUrl: './recap.component.scss',
})
export class RecapComponent implements OnInit {
  subTotal: number = 0;
  total: number = 0;
  constructor(private cartService: CartService) {}
  ngOnInit(): void {
    this.cartService.total$.subscribe((value) => {
      this.total = value;
    });
  }
  getTotalvalue() {
    console.log(this.total);
  }
}
