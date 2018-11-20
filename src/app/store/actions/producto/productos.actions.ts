import { Action } from '@ngrx/store';
import { Producto } from '../../../models/Producto';
export const LOAD_PRODUCTOS = '[Productos] Load Productos';
export const LOAD_PRODUCTOS_SUCCESS = '[Productos] Load Productos SUCCESS';
export const LOAD_PRODUCTOS_FAIL = '[Productos] Load Productos FAIL';


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
