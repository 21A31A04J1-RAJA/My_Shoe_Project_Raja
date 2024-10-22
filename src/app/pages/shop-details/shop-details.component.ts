import { Component, OnInit } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import Product from '../../model/product';
import { ProductService } from '../../services/product-service/product.service';
import { ActivatedRoute } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop-details',
  standalone: true,
  imports: [TabViewModule, AccordionModule, CommonModule],
  templateUrl: './shop-details.component.html',
  styleUrl: './shop-details.component.scss',
})
export class ShopDetailsComponent implements OnInit {
  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  product!: Product;

  ngOnInit(): void {
    window.scroll(0, 0);
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProducts()[id - 1];
    console.log(this.product.variants);
  }
}
