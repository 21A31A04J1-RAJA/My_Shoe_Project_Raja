import { Component } from '@angular/core';
import {
  FormControl,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { AuthService } from '../../services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastService } from '../../services/toast/toast.service';
import { GenericToastProps, Severity } from '../../model/CartProduct';

@Component({
  selector: 'app-myaccount',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './myaccount.component.html',
  styleUrl: './myaccount.component.scss',
})
export class MyaccountComponent {
  toggleForm: boolean = true;
  buttonInvalide: boolean = false;
  constructor(
    private auth: AuthService,
    private router: Router,
    private toastService: ToastService
  ) {}

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
    if (this.loginForm.status === 'VALID') {
      this.buttonInvalide = true;
      this.auth
        .login(this.loginForm.value.email!, this.loginForm.value.password!)
        .subscribe({
          next: (response) => {
            this.router.navigate(['/home']);
            this.buttonInvalide = false;
          },
          error: (error) => {
            console.error(error);
            const signupToast: GenericToastProps = {
              severity: Severity.error,
              summary: 'Erreur',
              detail: `L'adresse e-mail ou le mot de passe n'est pas valide.`,
            };
            this.toastService.displayGenericToast(signupToast);
            this.buttonInvalide = false;
          },
        });
    }
  }

  signUpSubmit() {
    this.signUpForm.get('email')?.markAsTouched();
    this.signUpForm.get('password')?.markAsTouched();
    this.signUpForm.get('name')?.markAsTouched();
    if (this.signUpForm.status === 'VALID') {
      this.buttonInvalide = true;
      this.auth
        .signup(
          this.signUpForm.value.email!,
          this.signUpForm.value.password!,
          this.signUpForm.value.name!
        )
        .subscribe({
          next: (response) => {
            console.log(response);
            this.toggleForm = true;
            const signupToast: GenericToastProps = {
              severity: Severity.success,
              summary: 'Succès',
              detail: 'Compte créé avec succès.',
            };
            this.toastService.displayGenericToast(signupToast);
            this.signUpForm.get('email')?.setValue('');
            this.signUpForm.get('password')?.setValue('');
            this.signUpForm.get('name')?.setValue('');
            this.buttonInvalide = false;
          },
          error: (error) => {
            const signupToast: GenericToastProps = {
              severity: Severity.error,
              summary: 'Erreur',
              detail: `L'adresse e-mail ou le mot de passe n'est pas valide.`,
            };
            this.toastService.displayGenericToast(signupToast);
            this.buttonInvalide = false;
            console.log(error);
          },
        });
    }
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
