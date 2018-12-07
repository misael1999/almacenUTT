import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/global/config';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EstadisticaService {

  constructor(private http: HttpClient) { }


  public getEstadisticaVales() {
      const URL = URL_SERVICIOS + '/estadisticas/vales';
      return this.http.get(URL);
  }


}

