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

  loginForm = new FormGroup({
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
      Validators.minLength(1),
    ]),
  });

  loginSubmit() {
    this.loginForm.get('email')?.markAsTouched();
    this.loginPassword?.markAsTouched();
    console.log(this.loginForm.value);
    console.log(this.loginForm.status);
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

  get loginEmail() {
    return this.loginForm.get('email');
  }
  get loginPassword() {
    return this.loginForm.get('password');
  }

  get signUpEmail() {
    return this.signUpForm.get('email');
  }
  get signUpPassword() {
    return this.signUpForm.get('password');
  }
  get signUpName() {
    return this.signUpForm.get('password');
  }
}
