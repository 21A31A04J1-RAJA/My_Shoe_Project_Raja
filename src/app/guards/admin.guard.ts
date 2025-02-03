import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const AdminGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const authToken = sessionStorage.getItem('auth-token');
  const userRole = sessionStorage.getItem('role');

  if (authToken && userRole === 'ADMIN') {
    return true;
  }
  return false;
  router.navigateByUrl('/myaccount');
};
