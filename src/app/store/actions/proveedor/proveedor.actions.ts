import { Action } from '@ngrx/store';
import { Proveedor } from '../../../models/proveedor';
export const CREATE_PROVEEDOR = '[Proveedor] Create proveedor';
export const CREATE_PROVEEDOR_SUCCESS = '[Proveedor] Create proveedor SUCCESS';
export const CREATE_PROVEEDOR_FAIL = '[Proveedor] Create Proveedor FAIL';
export const CREATE_PROVEEDOR_END = '[Proveedor] Create Proveedor END';

export const SELECT_PROVEEDOR = '[Proveedor] Select Proveedor';

export const UPDATE_PROVEEDOR = '[Proveedor] Delete Proveedor';
export const UPDATE_PROVEEDOR_SUCCESS = '[Proveedor] Delete Proveedor SUCCESS';
export const UPDATE_PROVEEDOR_FAIL = '[Proveedor] Delete Proveedor FAIL';


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

export class SelectProveedor implements Action {
    readonly type = SELECT_PROVEEDOR;
    constructor(public proveedor: Proveedor) {}
}

export class UpdateProveedor implements Action {
    readonly type = UPDATE_PROVEEDOR;
    constructor(public proveedor: Proveedor) {}
}

export class UpdateProveedorSuccess implements Action {

    readonly type = UPDATE_PROVEEDOR_SUCCESS;
    constructor(public payload: any) {}
}

export class UpdateProveedorFail implements Action {

    readonly type = UPDATE_PROVEEDOR_FAIL;
    constructor(public payload: any) {}
}

export type proveedorAcciones = CreateProveedor |
                                CreateProveedorSuccess |
                                CreateProveedorFail |
                                CreateProveedorEnd |
                                UpdateProveedor |
                                UpdateProveedorSuccess|
                                SelectProveedor |
                                UpdateProveedorFail;

