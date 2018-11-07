import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../global/config';
import { catchError, map } from 'rxjs/operators';
import { Usuario } from '../models/usuario';
import swal from 'sweetalert2';

@Injectable()
export class LoginService {

  public usuario: Usuario;
  public token: string;

  constructor(private _http: HttpClient) {

    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.token = localStorage.getItem('token');

  }

  private guardarStorage(usuario: any, token: string) {
      localStorage.setItem('usuario', JSON.stringify(usuario));
      localStorage.setItem('token', JSON.stringify(token));
  }

  public login(nombreUsuario: string, password: string) {
    const url = URL_SERVICIOS + '/login';
    return this._http.post(url, { nombreUsuario, password }).pipe(
      map(resp => {
        this.usuario = resp['usuario'];
        this.token = resp['token'];
        this.guardarStorage(this.usuario, this.token);
      }),
      catchError(
        (error): any => {
          console.log(error);
          swal('Error en el login', error.error.mensaje, 'error');
        }
      )
    );
  }

  public logout() {
    localStorage.clear();
  }

}
