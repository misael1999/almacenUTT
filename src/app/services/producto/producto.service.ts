import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../global/config';
import { Producto } from '../../models/producto';

@Injectable()
export class ProductoService {

  constructor(private http: HttpClient) { }


  public agregarProducto(producto: Producto) {
    const URL = URL_SERVICIOS + '/productos';
    return this.http.post(URL, producto);
  }

  public actualizarProducto(producto: Producto) {
    const URL = URL_SERVICIOS + '/productos';
    return this.http.patch(URL, producto);
  }

  public getProductos(page: number) {
    const URL = URL_SERVICIOS + '/productos/page/' + page;
    return this.http.get(URL);
  }

  public getProductosByDescripcion(descripcion: string) {
    const URL = URL_SERVICIOS + '/productos/todos/' + descripcion;
    return this.http.get(URL);
  }

}
