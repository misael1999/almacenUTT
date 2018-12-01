import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../global/config';
import { Usuario } from '../../models/Usuario';
import { Area } from '../../models/Area';

@Injectable()
export class UsuarioService {

  usuario: Usuario;

  constructor(private http: HttpClient) {

    this.usuario = JSON.parse(localStorage.getItem('usuario'));

   }

  public cambiarPassword(passwordAnterior: string, passwordNueva: string) {

    const URL = URL_SERVICIOS + '/usuarios/password/' + this.usuario.idUsuario;
    return this.http.patch(URL, {passwordAnterior, passwordNueva});

  }

  public getAreas() {
    const URL = URL_SERVICIOS + '/areas';
    return this.http.get(URL);
  }

  public createArea(area: Area) {
    const URL = URL_SERVICIOS + '/areas';
    return this.http.post(URL, area);
  }

  public actualizarArea(area: Area) {
    const URL = URL_SERVICIOS + '/areas';
    return this.http.patch(URL, area);
  }

  public getUsuarios() {
    const URL = URL_SERVICIOS + '/usuarios';
    return this.http.get(URL);
  }

  public createUsuario(usuario: Usuario) {
    const URL = URL_SERVICIOS + '/usuarios';
    return this.http.post(URL, usuario);
  }

  public actualizarUsuario(usuario: Usuario) {
    const URL = URL_SERVICIOS + '/usuarios';
    return this.http.patch(URL, usuario);
  }

}
