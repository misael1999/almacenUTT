import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../global/config';
import { Usuario } from '../../models/usuario';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app.reducer';
import { LogoutUser } from '../../store/actions';
import { Router } from '@angular/router';


@Injectable()
export class LoginService {

  public usuario: Usuario;
  public token: string;

  constructor(private _http: HttpClient, private store: Store<AppState>, private router: Router) {

    this.store.select('auth')
      .subscribe(auth => {
        if (auth.usuario != null) {
          this.usuario = auth.usuario;
          this.token = auth.token;
          this.guardarStorage(this.usuario, this.token);
          this.router.navigate(['/inicio']);
        }
    });

    this.cargarStorage();

  }

  public estaLogueado() {
    return ( this.token.length > 5 ) ? true : false;
  }


  private guardarStorage(usuario: any, token: string) {
      localStorage.setItem('usuario', JSON.stringify(usuario));
      localStorage.setItem('token', JSON.stringify(token));
  }

  cargarStorage() {

    if ( localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.usuario = JSON.parse( localStorage.getItem('usuario') );
    } else {
      this.token = '';
      this.usuario = null;
    }

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
