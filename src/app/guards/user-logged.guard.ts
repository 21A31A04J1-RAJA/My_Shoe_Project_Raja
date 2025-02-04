import { inject } from '@angular/core';
import { CanActivateFn } from '@angular/router';
import { Router } from '@angular/router';

export const userLoggedGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const authToken = localStorage.getItem('auth-token');
  const userRole = localStorage.getItem('role');

  if ((authToken && userRole === 'USER') || userRole === 'ADMIN') {
    return true;
  }
  router.navigateByUrl('/myaccount');
  return false;
};
