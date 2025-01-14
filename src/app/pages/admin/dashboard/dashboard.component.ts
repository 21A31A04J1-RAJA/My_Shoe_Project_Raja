import { products } from './../../../mock-product-list';
import { CommonModule } from '@angular/common';
import CatalogProduct from '../../../model/CatalogProduct';
import { StockstatusPipe } from '../../../pipes/status/stockstatus.pipe';
import { StatusColorPipe } from '../../../pipes/statusColor/status-color.pipe';
import { ProductService } from './../../../services/product-service/product.service';
import { Component, OnInit } from '@angular/core';
import { SearchBarComponent } from '../../../components/search-bar/search-bar.component';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [StockstatusPipe, StatusColorPipe, CommonModule, SearchBarComponent],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss',
})
export class DashboardComponent implements OnInit {
  products!: CatalogProduct[];
  searchInput: string = '';
  searchInputProduct!: CatalogProduct[];
  constructor(private productService: ProductService, private router: Router) {}

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((item) => (this.products = item));
  }

  searchProduct(value: string) {
    this.searchInputProduct = products.filter((item) =>
      item.name.toLowerCase().includes(value.toLowerCase())
    );
  }

  redirectToProductSettings(id: string) {
    this.router.navigate([`/admin/${id}`]);
  }
}
