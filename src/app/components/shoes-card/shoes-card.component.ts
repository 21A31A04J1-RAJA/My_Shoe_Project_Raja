import { Component, Input } from '@angular/core';
import Product from '../../model/product';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shoes-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './shoes-card.component.html',
  styleUrl: './shoes-card.component.scss',
})
export class ShoesCardComponent {
  constructor(private router: Router) {}

  @Input() product!: Product;

  redirectToShopDetails(id: number) {
    this.router.navigate([`/shop/${id}`]);
  }
}
