import { Component } from '@angular/core';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-shop-details',
  standalone: true,
  imports: [TabViewModule, AccordionModule],
  templateUrl: './shop-details.component.html',
  styleUrl: './shop-details.component.scss',
})
export class ShopDetailsComponent {}
