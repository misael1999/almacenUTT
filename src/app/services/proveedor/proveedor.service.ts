import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Proveedor } from '../../models/Proveedor';
import { URL_SERVICIOS } from '../../global/config';

@Injectable()
export class ProveedorService {

  constructor(private _http: HttpClient) { }


  public agregarProveedor(proveedor: Proveedor) {
    const URL = URL_SERVICIOS + '/proveedores';
    return this._http.post(URL, proveedor);
  }

  public getProveedores() {
    const URL = URL_SERVICIOS + '/proveedores';
    return this._http.get(URL);
  }

  public getProveedoresByNombre(termino: string) {
    const URL = URL_SERVICIOS + '/proveedores/' + termino;
    return this._http.get(URL);

  }

  public deleteProveedor(proveedor: Proveedor) {
    const URL = URL_SERVICIOS + '/proveedores';
    return this._http.patch(URL, proveedor);
  }


}
