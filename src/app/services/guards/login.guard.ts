import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoginService } from '../login/login.service';


@Injectable()
export class LoginGuard implements CanActivate {

  constructor(
    public loginService: LoginService,
    public router: Router
  ) {}

  canActivate() {

    if ( this.loginService.estaLogueado() ) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }

  }
}
