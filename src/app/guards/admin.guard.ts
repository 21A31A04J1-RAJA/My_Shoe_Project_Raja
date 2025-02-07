import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth/auth.service';

export const AdminGuard: CanActivateFn = () => {
  const auth = inject(AuthService);
  const router = inject(Router);
  let isAdmin: boolean = false;
  auth.isAdminAuthenticate$.subscribe((value) => {
    isAdmin = value;
  });
  if (isAdmin) {
    return true;
  }
  router.navigateByUrl('/myaccount');
  return false;
};
