import { Pipe, PipeTransform } from '@angular/core';
import { Colors } from '../../model/CartProduct';

@Pipe({
  name: 'shoesColor',
  standalone: true,
})
export class ShoesColorPipe implements PipeTransform {
  transform(color: Colors) {
    let shoesColor: string;

    switch (color) {
      case 'RED':
        shoesColor = 'Rouge';
        break;
      case 'BLUE':
        shoesColor = 'Blue';
        break;
      case 'GREEN':
        shoesColor = 'Vert';
        break;
      case 'BLACK':
        shoesColor = 'Noir';
        break;
      case 'WHITE':
        shoesColor = 'Blanc';
        break;
      case 'INDIGO':
        shoesColor = 'Indigo';
        break;
      case 'GRAY':
        shoesColor = 'Gris';
        break;
      case 'ORANGE':
        shoesColor = 'Orange';
        break;
      case 'PINK':
        shoesColor = 'Rose';
        break;
      default:
        shoesColor = '';
        break;
    }
    return shoesColor;
  }
}
