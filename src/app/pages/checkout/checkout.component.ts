import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  Validators,
  ReactiveFormsModule,
} from '@angular/forms';

@Component({
  selector: 'app-checkout',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './checkout.component.html',
  styleUrl: './checkout.component.scss',
})
export class CheckoutComponent {
  addressForm = new FormGroup({
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    surname: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(2),
    ]),
    address: new FormControl<string>('', [Validators.required]),
    postalCode: new FormControl<string>('', [Validators.required]),
    city: new FormControl<string>('', [Validators.required]),
    country: new FormControl<string>('', [Validators.required]),
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    phone: new FormControl<string>('', [
      Validators.required,
      Validators.pattern(/^((\+)33|0|0033)[1-9](\d{2}){4}$/g),
    ]),
  });

  addressSubmit() {
    console.log(this.addressForm.value);
  }

  public get name() {
    return this.addressForm.get('name');
  }
  public get surname() {
    return this.addressForm.get('surname');
  }
  public get address() {
    return this.addressForm.get('address');
  }
  public get postalCode() {
    return this.addressForm.get('postalCode');
  }
  public get city() {
    return this.addressForm.get('city');
  }
  public get country() {
    return this.addressForm.get('country');
  }
  public get email() {
    return this.addressForm.get('email');
  }
  public get phone() {
    return this.addressForm.get('phone');
  }
}
