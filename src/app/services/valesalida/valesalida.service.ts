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

  public getValesActivos(page: number, ordenar: string) {
    const URL = URL_SERVICIOS + '/vales/page/' + page + '?ordenar=' + ordenar;
    return this.http.get(URL);
  }

  public getValesEntregados(page: number, ordenar: string) {
    const URL = URL_SERVICIOS + '/vales/page/' + page + '?entregadas=si&ordenar=' + ordenar ;
    return this.http.get(URL);
  }

  public getValesByIdArea(idArea: number) {
    const URL = URL_SERVICIOS + '/vales/' + idArea ;
    return this.http.get(URL);
  }

  public getValeByNumber(idVale: number) {
    const URL = URL_SERVICIOS + '/vales?id=' + idVale;
    return this.http.get(URL);
  }
}
