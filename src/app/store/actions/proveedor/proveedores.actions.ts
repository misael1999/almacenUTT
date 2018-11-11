import { Action } from '@ngrx/store';
import { Proveedor } from '../../../models/Proveedor';
export const LOAD_PROVEEDORES = '[Proveedores] Load proveedores';
export const LOAD_PROVEEDORES_SUCCESS = '[Proveedores] Load proveedores SUCCESS';
export const LOAD_PROVEEDORES_FAIL = '[Proveedores] Load Proveedores FAIL';

export class LoadProveedores implements Action {
    readonly type = LOAD_PROVEEDORES;
    constructor() {}
}

export class LoadProveedoresSuccess implements Action {
    readonly type = LOAD_PROVEEDORES_SUCCESS;
    constructor(public proveedores: Proveedor[]) {}
}

export class LoadProveedoresFail implements Action {
    readonly type = LOAD_PROVEEDORES_FAIL;
    constructor(public payload: any) {}
}

export type proveedoresAcciones = LoadProveedores |
                                LoadProveedoresSuccess |
                                LoadProveedoresFail;
