import { Action } from '@ngrx/store';
import { Proveedor } from '../../../models/proveedor';
export const LOAD_PROVEEDORES = '[Proveedores] Load proveedores';
export const LOAD_PROVEEDORES_SUCCESS = '[Proveedores] Load proveedores SUCCESS';
export const LOAD_PROVEEDORES_FAIL = '[Proveedores] Load Proveedores FAIL';
export const LOAD_PROVEEDORES_END = '[Proveedores] Load Proveedores end';

export const SEARCH_PROVEEDORES = '[Proveedores] Search proveedores';
export const SEARCH_PROVEEDORES_SUCCESS = '[Proveedores] Search proveedores SUCCESS';
export const SEARCH_PROVEEDORES_FAIL = '[Proveedores] Search Proveedores FAIL';

export class LoadProveedores implements Action {
    readonly type = LOAD_PROVEEDORES;
    constructor(public page: number) {}
}

export class LoadProveedoresSuccess implements Action {
    readonly type = LOAD_PROVEEDORES_SUCCESS;
    constructor(public proveedores: Proveedor[], public pageable: any) {}
}

export class LoadProveedoresFail implements Action {
    readonly type = LOAD_PROVEEDORES_FAIL;
    constructor(public payload: any) {}
}

export class LoadProveedoresEnd implements Action {
    readonly type = LOAD_PROVEEDORES_END;
    constructor() {}
}

// ----  BUSCAR PROVEEDORES   ---- //

export class SearchProveedores implements Action {
    readonly type = SEARCH_PROVEEDORES;
    constructor(public termino: string) {}
}

export class SearchProveedoresSuccess implements Action {
    readonly type = SEARCH_PROVEEDORES_SUCCESS;
    constructor(public proveedores: Proveedor[]) {}
}

export class SearchProveedoresFail implements Action {
    readonly type = SEARCH_PROVEEDORES_FAIL;
    constructor(public payload: any) {}
}


export type proveedoresAcciones = LoadProveedores |
                                LoadProveedoresSuccess |
                                LoadProveedoresFail |
                                LoadProveedoresEnd |
                                SearchProveedores |
                                SearchProveedoresSuccess |
                                SearchProveedoresFail;
