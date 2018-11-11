import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../global/config';

@Injectable()
export class ProductoService {

  constructor(private http: HttpClient) { }

  public getProductos() {
    const URL = URL_SERVICIOS + '/productos';
    return this.http.get(URL);
  }

}
