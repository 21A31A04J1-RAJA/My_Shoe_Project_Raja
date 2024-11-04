import { Injectable } from '@angular/core';
import CartProduct from '../../model/CartProduct';
import { Colors } from '../../model/CatalogProduct';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private listOfProducts = new BehaviorSubject<CartProduct[]>([]);
  listOfProducts$ = this.listOfProducts.asObservable();

  quantityOfProductsInCart: number = 0;

  constructor() {
    this.listOfProducts.next([
      { ...this.product1, quantity: 1 },
      { ...this.product2, quantity: 1 },
    ]);
  }

  addProductToCart(product: CartProduct) {
    const productIndex = this.listOfProducts
      .getValue()
      .findIndex((item) => item.id == product.id);
    if (productIndex != -1) {
      this.listOfProducts.getValue()[productIndex].quantity += 1;
    } else {
      const updateProducts = [
        ...this.listOfProducts.getValue(),
        { ...product, quantity: 1 },
      ];
      this.listOfProducts.next(updateProducts);
    }
  }

  product1: CartProduct = new CartProduct(
    1,
    'PRD456',
    'Air Max Elite',
    'High Performance Running Shoes',
    'Experience the ultimate comfort and performance with Air Max Elite shoes.',
    [
      'Chaussant standard.',
      'Fermeture à lacets.',
      'Tige en mesh.',
      'Doublure textile.',
      'Support Rods system.',
      'Semelle intermédiaire Dreamstrike+.',
      'Poids : 290 g',
      'Drop semelle intermédiaire : 8 mm (talon : 38 mm / avant-pied : 30 mm).',
      'Semelle extérieure Lighttraxion.',
      'Couleur du produit : Solar Red / Carbon / Pulse Lime.',
      'Code du produit : PRD456.',
      'Matière: Cuir.',
      'Poids: 0.5kg.',
      'Couleur: Rouge.',
    ],
    [
      'Technologie d’amorti avancée pour un confort durable.',
      'Soutien renforcé à la cheville pour des mouvements stables.',
      'Tissu respirant qui garde les pieds au sec pendant l’entraînement.',
      'Semelle résistante à l’usure pour une traction améliorée sur tout type de terrain.',
    ],
    150,
    'Running shoes',
    Colors.BLUE,
    '45',
    'shoes1.png',
    new Date(),
    new Date()
  );
  product2: CartProduct = new CartProduct(
    1,
    'PRD456',
    'Air Max Elite',
    'High Performance Running Shoes',
    'Experience the ultimate comfort and performance with Air Max Elite shoes.',
    [
      'Chaussant standard.',
      'Fermeture à lacets.',
      'Tige en mesh.',
      'Doublure textile.',
      'Support Rods system.',
      'Semelle intermédiaire Dreamstrike+.',
      'Poids : 290 g',
      'Drop semelle intermédiaire : 8 mm (talon : 38 mm / avant-pied : 30 mm).',
      'Semelle extérieure Lighttraxion.',
      'Couleur du produit : Solar Red / Carbon / Pulse Lime.',
      'Code du produit : PRD456.',
      'Matière: Cuir.',
      'Poids: 0.5kg.',
      'Couleur: Rouge.',
    ],
    [
      'Technologie d’amorti avancée pour un confort durable.',
      'Soutien renforcé à la cheville pour des mouvements stables.',
      'Tissu respirant qui garde les pieds au sec pendant l’entraînement.',
      'Semelle résistante à l’usure pour une traction améliorée sur tout type de terrain.',
    ],
    150,
    'Running shoes',
    Colors.BLUE,
    '45',
    'shoes1.png',
    new Date(),
    new Date()
  );
}
