import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

@Component({
  selector: 'app-myaccount',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './myaccount.component.html',
  styleUrl: './myaccount.component.scss',
})
export class MyaccountComponent {
  toggleForm: boolean = true;

  loginInForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
  });

  signUpForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(6),
    ]),
    name: new FormControl<string>('', [
      Validators.required,
      Validators.minLength(3),
    ]),
  });

  loginSubmit() {
    this.loginInForm.get('email')?.markAsTouched();
    this.loginInForm.get('password')?.markAsTouched();
    console.log(this.loginInForm.value);
    console.log(this.loginInForm.status);
  }

  signUpSubmit() {
    this.signUpForm.get('email')?.markAsTouched();
    this.signUpForm.get('password')?.markAsTouched();
    this.signUpForm.get('name')?.markAsTouched();
    console.log(this.signUpForm.value);
    console.log(this.signUpForm.status);
  }

  switchForm() {
    this.toggleForm = !this.toggleForm;
  }
}
