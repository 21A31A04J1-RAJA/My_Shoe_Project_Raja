// import { Component } from '@angular/core';
import { Component, OnInit } from '@angular/core';
// import { Product } from '@domain/product';
import { CarouselService } from '../../services/carousel.service';
import { CarouselModule } from 'primeng/carousel';
import { ButtonModule } from 'primeng/button';
import { TagModule } from 'primeng/tag';
import Product from '../../model/product';
// import { CarouselService } from '../../services/carousel.service';

@Component({
  selector: 'app-carousel',
  standalone: true,

  // imports: [],
  imports: [CarouselModule, ButtonModule, TagModule],
  providers: [CarouselService],
  templateUrl: './carousel.component.html',
  styleUrl: './carousel.component.scss',
})
export class CarouselComponent implements OnInit {
  products: Product[] = [];

  responsiveOptions: any[] | undefined;

  constructor(private carouselService: CarouselService) {}

  ngOnInit() {
    this.products = this.carouselService.getProductsSmall();
    this.responsiveOptions = [
      {
        breakpoint: '1199px',
        numVisible: 1,
        numScroll: 1,
      },
      {
        breakpoint: '991px',
        numVisible: 2,
        numScroll: 1,
      },
      {
        breakpoint: '767px',
        numVisible: 1,
        numScroll: 1,
      },
    ];
  }

  getSeverity(status: string) {
    switch (status) {
      case 'INSTOCK':
        return 'success';
      case 'LOWSTOCK':
        return 'warning';
      case 'OUTOFSTOCK':
        return 'danger';
      default:
        return 'success';
    }
  }
}
