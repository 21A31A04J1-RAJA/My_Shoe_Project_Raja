import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../services/product-service/product.service';
import CatalogProduct, { ItemVariant } from '../../../model/CatalogProduct';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-settings',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './product-settings.component.html',
  styleUrl: './product-settings.component.scss',
})
export class ProductSettingsComponent implements OnInit {
  product!: CatalogProduct;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) {}

  productForm = new FormGroup({
    id: new FormControl<string>(''),
    code: new FormControl<string>(''),
    name: new FormControl<string>(''),
    title: new FormControl<string>(''),
    description: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(1),
    ]),
    details: new FormArray([]),
    price: new FormControl<number>(0),
    category: new FormControl<string>(''),
    variant: new FormArray([]),
    image: new FormControl<string>(''),
    createdAt: new FormControl<Date>(new Date()),
    updatedAt: new FormControl<Date>(new Date()),
    discount: new FormControl<number | undefined>(undefined),
  });

  ngOnInit(): void {
    const productId = this.route.snapshot.paramMap.get('id');

    if (productId)
      this.productService.getProductById(productId).subscribe((product) => {
        this.product = product;

        this.productForm.patchValue({
          id: product.id,
          code: product.code,
          name: product.name,
          title: product.title,
          description: product.description,
          price: product.price,
          category: product.category,
          // variant: product.variants,
          image: product.image,
          createdAt: product.createdAt,
          updatedAt: product.updatedAt,
          discount: product.discount,
        });

        product.details.forEach((detail) => {
          const detailControl = new FormControl(detail, Validators.required);
          this.detailsForm.push(detailControl);
        });

        product.variants.forEach((variant) => {
          const variantControl = new FormGroup({
            color: new FormControl(variant.color, Validators.required),
            sizeStock: new FormArray(
              variant.sizeStock.map(
                (size) =>
                  new FormGroup({
                    id: new FormControl(size.id),
                    size: new FormControl(size.size, Validators.required),
                    stock: new FormControl(size.stock, [
                      Validators.required,
                      Validators.min(0),
                    ]),
                  })
              )
            ),
          });
          this.variantForm.push(variantControl);
        });
      });
    console.log(this.variantForm.value);
  }

  get detailsForm() {
    return this.productForm.get('details') as FormArray;
  }

  get variantForm() {
    return this.productForm.get('variant') as FormArray;
  }

  updateProduct() {
    console.log(this.productForm.status);
    console.log(this.productForm.value.variant);
  }
}
