import { Injectable } from '@angular/core';
import { Proveedor } from '../models/Proveedor';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../global/config';

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


}
