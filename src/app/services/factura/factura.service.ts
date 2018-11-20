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

  public getFacturasActivas() {
    const URL = URL_SERVICIOS + '/facturas';
    return this.http.get(URL);
  }

  public getFacturasEntregadas() {
    const URL = URL_SERVICIOS + '/facturas?entregadas=si';
    return this.http.get(URL);
  }

  public getFacturaByFolio(folioFactura: number) {
    const URL = URL_SERVICIOS + '/facturas?folio=' + folioFactura;
    return this.http.get(URL);
  }

}
