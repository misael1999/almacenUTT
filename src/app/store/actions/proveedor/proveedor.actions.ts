import { Action } from '@ngrx/store';
import { Proveedor } from '../../../models/Proveedor';
export const CREATE_PROVEEDOR = '[Proveedor] Create proveedor';
export const CREATE_PROVEEDOR_SUCCESS = '[Proveedor] Create proveedor SUCCESS';
export const CREATE_PROVEEDOR_FAIL = '[Proveedor] Create Proveedor FAIL';
export const CREATE_PROVEEDOR_END = '[Proveedor] Create Proveedor END';

export class CreateProveedor implements Action {
    readonly type = CREATE_PROVEEDOR;
    constructor(public proveedor: Proveedor) {}
}

export class CreateProveedorSuccess implements Action {

    readonly type = CREATE_PROVEEDOR_SUCCESS;
    constructor(public payload: any) {}
}

export class CreateProveedorFail implements Action {

    readonly type = CREATE_PROVEEDOR_FAIL;
    constructor(public payload: any) {}
}
export class CreateProveedorEnd implements Action {

    readonly type = CREATE_PROVEEDOR_END;
    constructor() {}
}

export type proveedorAcciones = CreateProveedor | CreateProveedorSuccess | CreateProveedorFail | CreateProveedorEnd;

