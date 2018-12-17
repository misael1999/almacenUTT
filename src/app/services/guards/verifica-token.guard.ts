import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import swal from 'sweetalert2';
import { LoginService } from '../login/login.service';

@Injectable({
  providedIn: 'root'
})
export class VerificaTokenGuard implements CanActivate {

  constructor(private loginService: LoginService) {}

  canActivate(): Promise<boolean> | boolean {
    const token = localStorage.getItem('token');
    const payload = JSON.parse(atob(token.split('.')[1]));
    return this.expirado(payload.exp);
  }

  expirado(fechaExp: number): boolean {

    const ahora = new Date().getTime() / 1000;

    if (fechaExp < ahora) {
      swal('Sesión expirada', 'Vuelve a iniciar sesión', 'info');
      this.loginService.logout();
      return false;
    }

    return true;

  }

}
