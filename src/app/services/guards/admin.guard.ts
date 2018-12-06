import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { LoginService } from '../login/login.service';

@Injectable()
export class AdminGuard implements CanActivate {

  constructor(
    public loginService: LoginService
  ) { }

  canActivate() {

    if ( this.loginService.usuario.role === 'ROLE_ADMIN' ) {
      return true;
    } else {
      this.loginService.logout();
      return false;
    }

  }

}
