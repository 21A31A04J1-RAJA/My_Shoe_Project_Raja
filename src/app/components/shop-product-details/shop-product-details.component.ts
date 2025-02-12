import { Component, Input, OnInit } from '@angular/core';
import CatalogProduct, {
  Colors,
  ItemVariant,
  SizeStock,
} from '../../model/CatalogProduct';
import { TabViewModule } from 'primeng/tabview';
import { AccordionModule } from 'primeng/accordion';
import { CommonModule } from '@angular/common';
import {
  ReactiveFormsModule,
  FormGroup,
  FormControl,
  Validators,
} from '@angular/forms';
import { CartService } from '../../services/cart/cart.service';
import CartProduct, {
  GenericToastProps,
  Severity,
} from '../../model/CartProduct';
import { ToastService } from '../../services/toast/toast.service';
import { ShoesColorPipe } from '../../pipes/shoesColor/shoes-color.pipe';
@Component({
  selector: 'app-shop-product-details',
  standalone: true,
  imports: [
    TabViewModule,
    AccordionModule,
    CommonModule,
    ReactiveFormsModule,
    ShoesColorPipe,
  ],
  templateUrl: './shop-product-details.component.html',
  styleUrl: './shop-product-details.component.scss',
})
export class ShopProductDetailsComponent implements OnInit {
  @Input() product!: CatalogProduct;

  productForm = new FormGroup({
    productId: new FormControl<number>(0),
    productCode: new FormControl<string>(''),
    productName: new FormControl<string>(''),
    productTitle: new FormControl<string>(''),
    productDescription: new FormControl<string>(''),
    productDetails: new FormControl<string[]>([]),
    productPrice: new FormControl<number>(0),
    productCategory: new FormControl<string>(''),
    productColor: new FormControl<Colors | undefined>(
      undefined,
      Validators.required
    ),
    productSize: new FormControl<string>('', Validators.required),
    productImage: new FormControl<string>(''),
    productCreatedAt: new FormControl<Date>(new Date()),
    productUpdatedAt: new FormControl<Date>(new Date()),
    productDiscount: new FormControl<number | undefined>(undefined),
  });

  constructor(
    private cartService: CartService,
    private toastService: ToastService
  ) {}

  shoesColor!: Colors;
  productIsNotAvailable: boolean = false;
  productVariant!: ItemVariant[];
  shoesSizeStockList!: SizeStock[];

  ngOnInit() {
    //Setup the first product color as shoes color default
    this.shoesColor = this.product.variants[0].color;
    this.productForm.get('productColor')?.setValue(this.shoesColor);

    this.getVariantByColor(this.shoesColor);
    this.getShoeSizeStockList();
  }

  getVariantByColor(color: Colors) {
    this.productVariant = this.product.variants.filter(
      (item) => item.color == color
    );
  }

  getShoeSizeStockList() {
    this.shoesSizeStockList = this.productVariant[0].sizeStock.map(
      (size) => size
    );
  }

  changeShoesSizeAvailableByColorChosen(color: Colors): void {
    this.productIsNotAvailable = false;
    this.shoesColor = color;
    this.productForm.get('productSize')?.setValue(null);
    this.productForm.get('productSize')?.markAsUntouched();
    this.getVariantByColor(color);
    this.getShoeSizeStockList();
  }

  setUpShoesSizeInFormControl(shoes: SizeStock): void {
    this.productForm.get('productSize')?.setValue(shoes.size);

    if (shoes.stock < 1) {
      this.productIsNotAvailable = true;
    } else {
      this.productIsNotAvailable = false;
    }
  }

  createNewcartItem(): CartProduct {
    const cartProduct = new CartProduct(
      this.product.id!,
      this.product.code!,
      this.product.name!,
      this.product.title!,
      this.product.description!,
      this.product.details!,
      this.product.price!,
      this.product.category!,
      this.productForm.value.productColor!,
      this.productForm.value.productSize!,
      this.product.image!,
      this.product.createdAt!,
      this.product.updatedAt!,
      this.product.discount!
    );
    return cartProduct;
  }

  addProductToCart(): void {
    this.productForm.get('productSize')?.markAsTouched();
    if (this.productForm.valid) {
      this.cartService.addProductToCart(this.createNewcartItem());
      this.toastService.showCartToast(this.createNewcartItem());
    }
  }

  addProductToFavorites() {
    const genericToastProps: GenericToastProps = {
      severity: Severity.success,
      summary: 'Product Saved',
      detail: 'Product added to you favorites',
    };
    this.toastService.displayGenericToast(genericToastProps);
  }
}
