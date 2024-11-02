import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink, RouterLinkActive, ButtonModule, CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private cartService: CartService) {
    this.cartService.listOfProducts$.subscribe(
      (value) => (this.quantityOfProductsInCart = value.length)
    );
  }
  quantityOfProductsInCart: number = 3;
  openCloseMenu: boolean = false;

  openMenu() {
    this.openCloseMenu = !this.openCloseMenu;
  }
}
