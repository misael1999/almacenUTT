import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValeSalida } from 'src/app/models/ValeSalida';
import { URL_SERVICIOS } from 'src/app/global/config';

@Injectable()
export class ValesalidaService {

  constructor(private http: HttpClient) { }

  public agregarValeSalida(vale: ValeSalida) {
    const URL = URL_SERVICIOS + '/vales';
    return this.http.post(URL, vale);
  }

  public getValesActivos() {
    const URL = URL_SERVICIOS + '/vales';
    return this.http.get(URL);
  }

  public getValesEntregados() {
    const URL = URL_SERVICIOS + '/vales?entregadas=si';
    return this.http.get(URL);
  }

  public getValeByNumber(idVale: number) {
    const URL = URL_SERVICIOS + '/vales?id=' + idVale;
    return this.http.get(URL);
  }
}
