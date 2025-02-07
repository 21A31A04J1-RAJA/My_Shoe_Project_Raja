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
  isAdmin: boolean = false;
  isUser: boolean = false;
  constructor(
    private cartService: CartService,
    private authService: AuthService
  ) {
    this.cartService.listOfProducts$.subscribe(
      (value) => (this.quantityOfProductsInCart = value.length)
    );
    this.authService.isAdminAuthenticate$.subscribe((isAdmin) => {
      this.isAdmin = isAdmin;
    });
    this.authService.isUserAuthenticate$.subscribe((isUser) => {
      this.isUser = isUser;
    });
  }
  quantityOfProductsInCart!: number;
  openCloseMenu: boolean = false;

  openMenu() {
    this.openCloseMenu = !this.openCloseMenu;
  }
}
