import { Component, Input } from '@angular/core';
import CatalogProduct from '../../model/CatalogProduct';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import CartProduct, { Colors, Severity } from '../../model/CartProduct';
import { ToastService } from '../../services/toast/toast.service';
import { CartService } from '../../services/cart/cart.service';

@Component({
  selector: 'app-shoes-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shoes-card.component.html',
  styleUrl: './shoes-card.component.scss',
})
export class ShoesCardComponent {
  constructor(
    private router: Router,
    private toastService: ToastService,
    private cartService: CartService
  ) {}

  @Input() product!: CatalogProduct;

  redirectToShopDetails(id: string) {
    this.router.navigate([`/shop/${id}`]);
  }

  addToCart(event: Event) {
    event.stopPropagation(); // Prevent navigation when clicking the add to cart button
    
    const cartProduct = new CartProduct(
      this.product.id,
      this.product.code,
      this.product.name,
      this.product.title,
      this.product.description,
      this.product.details,
      this.product.price,
      this.product.category,
      Colors.BLACK, // Default color
      '42', // Default size
      this.product.image,
      this.product.createdAt,
      this.product.updatedAt,
      this.product.discount
    );

    this.cartService.addProductToCart(cartProduct);
    this.toastService.displayGenericToast({
      severity: Severity.success,
      summary: 'Success',
      detail: 'Product added to cart successfully!'
    });
  }
}
