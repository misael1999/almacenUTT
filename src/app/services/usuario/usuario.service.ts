import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../global/config';
import { Usuario } from '../../models/Usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuario: Usuario;

  constructor(private http: HttpClient) {

    this.usuario = JSON.parse(localStorage.getItem('usuario'));

   }

  public cambiarPassword(passwordAnterior: string, passwordNueva: string) {

    const URL = URL_SERVICIOS + '/usuarios/password/' + this.usuario.idUsuario;
    return this.http.patch(URL, {passwordAnterior, passwordNueva});

  }

}
