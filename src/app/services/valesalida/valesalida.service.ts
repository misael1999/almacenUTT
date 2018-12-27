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

  public actualizarValeSalida(vale: ValeSalida) {
    const URL = URL_SERVICIOS + '/vales';
    return this.http.patch(URL, vale);
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

  public getValeById(idValeSalida: number) {
    const URL = URL_SERVICIOS + '/vales/id/' + idValeSalida;
    return this.http.get(URL);
  }

  public getValesLikeTermino(termino) {
    const URL = URL_SERVICIOS + '/vales/todo/' + termino;
    return this.http.get(URL);
  }

  public getValesWithDocuments(page: number) {
    const URL = URL_SERVICIOS + '/vales/documentos/' + page;
    return this.http.get(URL);
  }

  public downloadVale(nombreDocumento: string) {
    const URL = URL_SERVICIOS + '/vales/descargar/documento/' + nombreDocumento;
    return this.http.get(URL, {responseType: 'blob'});
  }


  public subirArchivo(archivo: File, idVale: string) {
    const URL = URL_SERVICIOS + '/vales/upload';
    const formData = new FormData();
    formData.append('archivo', archivo);
    formData.append('idVale', idVale);
    return this.http.patch(URL, formData, {responseType: 'json'});
  }


}
