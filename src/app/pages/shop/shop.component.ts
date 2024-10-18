import { Component } from '@angular/core';
import { ShoesCardComponent } from '../../components/shoes-card/shoes-card.component';

@Component({
  selector: 'app-shop',
  standalone: true,
  imports: [ShoesCardComponent],
  templateUrl: './shop.component.html',
  styleUrl: './shop.component.scss',
})
export class ShopComponent {}
