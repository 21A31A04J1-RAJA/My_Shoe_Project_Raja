import { Component, OnInit } from '@angular/core';
import { ShoesCardComponent } from '../../components/shoes-card/shoes-card.component';
import { AccordionModule } from 'primeng/accordion';
import { ProductService } from '../../services/product-service/product.service';
import CatalogProduct from '../../model/CatalogProduct';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ShoesCardComponent, AccordionModule, CommonModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent implements OnInit {
  constructor(private productService: ProductService) {}

  listOfProducts: CatalogProduct[] = [];

  ngOnInit(): void {
    this.listOfProducts = this.productService.getProducts();
  }
}
