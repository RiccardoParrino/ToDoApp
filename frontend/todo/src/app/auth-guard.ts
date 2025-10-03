import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from './service/login-service';

export const authGuard: CanActivateFn = (route, state) => {

  const loginService = inject(LoginService);
  const router = inject(Router);

  if (!loginService.isLogged()) {
    console.log("User should be logged in!");
    router.navigate(['login']);
    return false;
  }

  console.log("User successfully logged in!");

  return true;
};
