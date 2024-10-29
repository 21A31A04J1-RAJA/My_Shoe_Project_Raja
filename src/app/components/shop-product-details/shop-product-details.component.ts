import { Component, Input, model, OnInit } from '@angular/core';
import CatalogProduct, {
  Colors,
  ItemVariant,
  SizeStock,
} from '../../model/CatalogProduct';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
@Component({
  selector: 'app-shop-product-details',
  standalone: true,
  imports: [TabViewModule, AccordionModule, CommonModule, ReactiveFormsModule],
  templateUrl: './shop-product-details.component.html',
  styleUrl: './shop-product-details.component.scss',
})
export class ShopProductDetailsComponent implements OnInit {
  productForm = new FormGroup({
    productColor: new FormControl('', Validators.required),
    productSize: new FormControl('', Validators.required),
    productId: new FormControl(0, Validators.required),
  });

  constructor() {}

  @Input() product!: CatalogProduct;

  shoesColor!: Colors;
  productVariant!: ItemVariant[];
  shoesSizeStockList!: SizeStock[];

  ngOnInit() {
    //Setup the first product color as shoes color default
    this.shoesColor = this.product.variants[0].color;
    this.productForm.get('productColor')?.setValue(this.shoesColor);

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

  changeShoesSizeAvailableByColorChosen(color: Colors) {
    this.shoesColor = color;
    this.productForm.get('productSize')?.setValue(null);
    this.getVariantByColor(color);
    this.getShoeSizeStockList();
  }

  addProductToCart() {
    this.productForm.get('productId')?.setValue(this.product.id);
    this.productForm.get('productSize')?.markAsTouched();

    if (this.productForm.valid) {
      console.log(this.productForm.value);
    }
  }
}
