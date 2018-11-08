import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../global/config';
import { catchError, map } from 'rxjs/operators';
import { Usuario } from '../models/usuario';
import swal from 'sweetalert2';
import { Store } from '@ngrx/store';
import { AppState } from '../store/app.reducer';
import { LogoutUser } from '../store/actions';


@Injectable()
export class LoginService {

  public usuario: Usuario;
  public token: string;
  public error: any;

  constructor(private _http: HttpClient, private store: Store<AppState>) {

    this.store.select('auth').subscribe(auth => {
        this.error = auth.error;
        if (this.error != null) {
          swal(this.error.error.error.mensaje, this.error.error.error.error, 'error');
        } else if (auth.usuario != null) {
          this.usuario = auth.usuario;
          this.token = auth.token;
          this.guardarStorage(this.usuario, this.token);
        }
    });

    this.usuario = JSON.parse(localStorage.getItem('usuario'));
    this.token = localStorage.getItem('token');

  }

  private guardarStorage(usuario: any, token: string) {
      localStorage.setItem('usuario', JSON.stringify(usuario));
      localStorage.setItem('token', JSON.stringify(token));
  }

  public login(nombreUsuario: string, password: string) {
    const url = URL_SERVICIOS + '/login';
    return this._http.post(url, { nombreUsuario, password });
  }

  public logout() {
    this.store.dispatch(new LogoutUser());
    localStorage.clear();
  }

}
