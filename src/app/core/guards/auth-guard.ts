import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {

  // Inject Angular Router
  const router = inject(Router);

  // Temporary authentication flag
  const isLoggedIn = true; // Replace with actual authentication logic;

  if (isLoggedIn) {

    return true;

  }

  // Redirect user to Home page
  router.navigate(['/']);

  return false;

};