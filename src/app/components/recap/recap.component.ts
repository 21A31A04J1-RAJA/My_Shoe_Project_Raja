import { Component } from '@angular/core';

@Component({
  selector: 'app-recap',
  standalone: true,
  imports: [],
  templateUrl: './recap.component.html',
  styleUrl: './recap.component.scss',
})
export class RecapComponent {
  subTotal: number = 0;
  total: number = 0;
}
