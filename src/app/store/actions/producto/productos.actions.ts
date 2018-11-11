import { Action } from '@ngrx/store';
import { Producto } from '../../../models/Producto';
export const LOAD_PRODUCTOS = '[Producto] Create Producto';
export const LOAD_PRODUCTOS_SUCCESS = '[Producto] Create Producto SUCCESS';
export const LOAD_PRODUCTOS_FAIL = '[Producto] Create Producto FAIL';


export class LoadProductos implements Action {
    readonly type = LOAD_PRODUCTOS;
    constructor() {}
}

export class LoadProductosSuccess implements Action {
    readonly type = LOAD_PRODUCTOS_SUCCESS;
    constructor(public productos: Producto[]) {}
}

export class LoadProductosFail implements Action {
    readonly type = LOAD_PRODUCTOS_FAIL;
    constructor(public payload: any) {}
}

export type productosAcciones = LoadProductos |
                                LoadProductosSuccess |
                                LoadProductosFail;
