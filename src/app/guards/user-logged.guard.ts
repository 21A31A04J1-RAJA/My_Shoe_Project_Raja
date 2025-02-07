import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const userLoggedGuard: CanActivateFn = async (route, state) => {
  const router = inject(Router);
  const userAuth = inject(AuthService);
  let isUser: boolean = false;
  userAuth.isUserAuthenticate$.subscribe((value) => {
    isUser = value;
  });
  if (isUser) {
    return true;
  }
  router.navigateByUrl('/myaccount');
  return false;
};
