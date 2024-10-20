import { Component } from '@angular/core';
import { ShoesCardComponent } from '../../components/shoes-card/shoes-card.component';
import { AccordionModule } from 'primeng/accordion';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ShoesCardComponent, AccordionModule],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {}
