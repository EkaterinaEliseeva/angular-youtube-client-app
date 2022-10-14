import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router } from '@angular/router';
import AuthService from 'src/app/core/services/auth/auth.service';

@Injectable()
export default class AuthGuard implements CanActivate {
  constructor(private router: Router, private readonly authService: AuthService) {}

  async canActivate(route: ActivatedRouteSnapshot): Promise<boolean> {
    const user = this.authService.getUser();

    const isLoginPage = route.url.length && route.url[0].path === 'login';

    if (user && isLoginPage) {
      await this.router.navigate(['/main']);

      return false;
    }

    if (!user && !isLoginPage) {
      await this.router.navigate(['/login']);

      return false;
    }

    return true;
  }
}
