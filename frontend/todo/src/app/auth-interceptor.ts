import { HttpInterceptorFn } from '@angular/common/http';
import { inject } from '@angular/core';
import { LoginService } from './service/login-service';
import { catchError, throwError } from 'rxjs';
import { Router } from '@angular/router';

export const authInterceptor: HttpInterceptorFn = (req, next) => {
  const loginService = inject(LoginService);
  const router = inject(Router);
  let accessToken = loginService.getAccessToken();

  const authReq = accessToken !== null ? req.clone({
    setHeaders: {
      Authorization: `Bearer ${accessToken}`,
    }
  }) : req;

  return next(authReq).pipe(
    catchError( (error) => {
      if (error.status === 403 || error.status === 401) {
        accessToken = null;
        localStorage.removeItem('todolist-access-token');
        router.navigate(['login']);
      }
      return throwError( () => error );
    } )
  );
};
