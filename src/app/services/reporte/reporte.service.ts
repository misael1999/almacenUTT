import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../global/config';

@Injectable()
export class ReporteService {

  constructor(private http: HttpClient) { }

  public getProductosByMesAndAno(page, mes, ano) {

    const URL = URL_SERVICIOS + '/reportes/productos/page/' + page + '?mes=' + mes + '&ano=' + ano;
    return this.http.get(URL);
  }

}
