import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { ButtonModule } from 'primeng/button';
import { CartService } from '../../services/cart/cart.service';
import { AuthService } from '../../services/auth/auth.service';
import { PopOverComponent } from '../pop-over/pop-over.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    ButtonModule,
    CommonModule,
    PopOverComponent,
  ],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  isUserAdmin: boolean = false;
  isUserAuthenticated: boolean = false;
  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {
    this.cartService.listOfProducts$.subscribe(
      (value) => (this.quantityOfProductsInCart = value.length)
    );
    this.authService.isUserAdmin$.subscribe((isUserAdmin) => {
      this.isUserAdmin = isUserAdmin;
    });
    this.authService.isUserAuthenticated$.subscribe((isUserAuthenticated) => {
      this.isUserAuthenticated = isUserAuthenticated;
    });
  }
  quantityOfProductsInCart!: number;
  openCloseMenu: boolean = false;

  openMenu() {
    this.openCloseMenu = !this.openCloseMenu;
  }
}
