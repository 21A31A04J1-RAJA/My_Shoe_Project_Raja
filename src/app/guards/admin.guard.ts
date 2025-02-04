import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const AdminGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  const authToken = localStorage.getItem('auth-token');
  const userRole = localStorage.getItem('role');

  if (authToken && userRole === 'ADMIN') {
    return true;
  }
  router.navigateByUrl('/myaccount');
  return false;
};
