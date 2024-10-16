import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { CarouselComponent } from '../../components/carousel/carousel.component';
import { ManufacturingComponent } from '../../components/manufacturing/manufacturing.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [ButtonModule, CarouselComponent, ManufacturingComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
