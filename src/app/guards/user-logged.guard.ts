import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const userLoggedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authToken = sessionStorage.getItem('auth-token');
  const userRole = sessionStorage.getItem('role');

  if (authToken && userRole === 'USER') {
    return true;
  }
  return false;
  router.navigateByUrl('/myaccount');
};
