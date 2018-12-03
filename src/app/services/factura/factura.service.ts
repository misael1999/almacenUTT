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

  public getFacturasActivas(page: number) {
    const URL = URL_SERVICIOS + '/facturas/page/' + page;
    return this.http.get(URL);
  }

  public getFacturasEntregadas(page: number) {
    const URL = URL_SERVICIOS + '/facturas/page/' + page + '?entregadas=si';
    return this.http.get(URL);
  }

  public getFacturaByFolio(folioFactura: number) {
    const URL = URL_SERVICIOS + '/facturas/' + folioFactura;
    return this.http.get(URL);
  }

}
