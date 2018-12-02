import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../global/config';

@Injectable()
export class ProductoService {

  constructor(private http: HttpClient) { }

  public getProductos(page: number) {
    const URL = URL_SERVICIOS + '/productos/page/' + page;
    return this.http.get(URL);
  }

  public getProductosByDescripcion(descripcion: string) {
    const URL = URL_SERVICIOS + '/productos/todos/' + descripcion;
    return this.http.get(URL);
  }

}
