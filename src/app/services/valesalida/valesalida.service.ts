import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ValeSalida } from 'src/app/models/ValeSalida';
import { URL_SERVICIOS } from 'src/app/global/config';

@Injectable({
  providedIn: 'root'
})
export class ValesalidaService {

  constructor(private http: HttpClient) { }

  public agregarValeSalida(vale: ValeSalida){
    const URL = URL_SERVICIOS + '/vales';
    return this.http.post(URL, vale);
  }

  public getValesActivos() {
    const URL = URL_SERVICIOS + '/vales';
    return this.http.get(URL);
  }

  public getValesEntregados() {
    const URL = URL_SERVICIOS + '/vales?entregados=si';
    return this.http.get(URL);
  }

  public getValeByNumber(numeroRequisicion: number) {
    const URL = URL_SERVICIOS + '/vales?requisicion=' + numeroRequisicion;
    return this.http.get(URL);
  }
}
