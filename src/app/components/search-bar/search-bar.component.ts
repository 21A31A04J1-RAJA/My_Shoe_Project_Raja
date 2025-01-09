import { Component, model, output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import CatalogProduct from '../../model/CatalogProduct';

@Component({
  selector: 'app-search-bar',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './search-bar.component.html',
  styleUrl: './search-bar.component.scss',
})
export class SearchBarComponent {
  search = model<string>('');
  clickSearch = output();

  searchProduct() {
    this.clickSearch.emit();
  }
}
