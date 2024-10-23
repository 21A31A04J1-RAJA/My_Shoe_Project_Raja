import { Colors, ProductVariant, SizeStock } from './../../model/product';
import { Component, Input, OnInit } from '@angular/core';
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

  @Input() colore!: Colors;

  product!: Product;
  shoesColor!: Colors;
  productVariant!: ProductVariant[];
  shoesSizeStockList!: SizeStock[];

  ngOnInit() {
    window.scroll(0, 0);
    const productId = Number(this.route.snapshot.paramMap.get('id'));
    this.product = this.productService.getProducts()[productId - 1];

    //Setup the first product color as shoes color default
    this.shoesColor = this.product.variants[0].color;

    this.getVariantByColor(this.shoesColor);
    this.getShoeSizeStockList();
  }

  getVariantByColor(color: Colors) {
    this.productVariant = this.product.variants.filter(
      (item) => item.color == color
    );
  }

  getShoeSizeStockList() {
    this.shoesSizeStockList = this.productVariant[0].sizeStock.map(
      (size) => size
    );
  }

  changeShoesSizeAvailableByColorsChosen(color: Colors) {
    this.getVariantByColor(color);
    this.getShoeSizeStockList();
  }
}
