import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/global/config';
import { HttpClient } from '@angular/common/http';
import { Factura } from 'src/app/models/Factura';

@Injectable({
  providedIn: 'root'
})
export class FacturaService {

  constructor(private http: HttpClient) { }


  public agregarFactura(factura: Factura) {
    const URL = URL_SERVICIOS + 'facturas';
    return this.http.post(URL, factura);
  }

}
