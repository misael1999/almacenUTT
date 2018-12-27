import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/global/config';
import { HttpClient } from '@angular/common/http';
import { Factura } from 'src/app/models/Factura';

@Injectable()
export class FacturaService {

  constructor(private http: HttpClient) { }


  public agregarFactura(factura: Factura) {
    const URL = URL_SERVICIOS + '/facturas';
    return this.http.post(URL, factura);
  }

  public actulizarFactura(factura: Factura) {
    const URL = URL_SERVICIOS + '/facturas';
    return this.http.patch(URL, factura);
  }

  public getFacturasActivas(page: number, ordenar: string) {
    const URL = URL_SERVICIOS + '/facturas/page/' + page + '?ordenar=' + ordenar;
    return this.http.get(URL);
  }

  public getFacturasEntregadas(page: number, ordenar: string) {
    const URL = URL_SERVICIOS + '/facturas/page/' + page + '?entregadas=si&ordenar=' + ordenar;
    return this.http.get(URL);
  }

  public getFacturaByFolio(folioFactura: number) {
    const URL = URL_SERVICIOS + '/facturas/' + folioFactura;
    return this.http.get(URL);
  }

  public getFacturaLikeTermino(termino) {
    const URL = URL_SERVICIOS + '/facturas/todo/' + termino;
    return this.http.get(URL);
  }



}
