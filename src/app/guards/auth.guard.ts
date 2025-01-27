import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const AuthGuard: CanActivateFn = () => {
  // const auth = inject(AuthService);
  const router = inject(Router);
  const authToken = sessionStorage.getItem('auth-token');
  if (authToken) {
    return true;
  }
  router.navigateByUrl('/myaccount');
  return false;
};
