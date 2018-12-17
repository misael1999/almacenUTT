import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../global/config';

@Injectable()
export class ReporteService {

  constructor(private http: HttpClient) { }

  public getReportePrductosByMesAndAnio(mes, anio) {

    const URL = URL_SERVICIOS + '/reportes/productos?mes=' + mes + '&anio=' + anio;
    return this.http.get(URL, {responseType: 'blob'});
  }

  public getReporteProductosByAreaAndfechas(idArea, del, al) {

    const URL = URL_SERVICIOS + '/reportes/productos/areas?area=' + idArea + '&del=' + del 
        + '&al=' + al;
    return this.http.get(URL, {responseType: 'blob'});
  }

  public getReporteProductosByProveedor(proveedor: string) {
    const URL = URL_SERVICIOS + '/reportes/productos/proveedor/' + proveedor;
    return this.http.get(URL, {responseType: 'blob'});
  }

  public getReportesGastosByAreas(del: string, al: string) {
    const URL = URL_SERVICIOS + '/reportes/areas/gastos?del=' + del + '&al=' + al;
    return this.http.get(URL, {responseType: 'blob'});
  }

}
