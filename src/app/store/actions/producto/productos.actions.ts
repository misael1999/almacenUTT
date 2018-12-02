import { Action } from '@ngrx/store';
import { Producto } from '../../../models/Producto';
export const LOAD_PRODUCTOS = '[Productos] Load Productos';
export const LOAD_PRODUCTOS_SUCCESS = '[Productos] Load Productos SUCCESS';
export const LOAD_PRODUCTOS_FAIL = '[Productos] Load Productos FAIL';

export const SEARCH_PRODUCTOS = '[Productos] Search Productos';
export const SEARCH_PRODUCTOS_SUCCESS = '[Productos] Search Productos SUCCESS';
export const SEARCH_PRODUCTOS_FAIL = '[Productos] Search Productos FAIL';


export class LoadProductos implements Action {
    readonly type = LOAD_PRODUCTOS;
    constructor(public page: number) {}
}

export class LoadProductosSuccess implements Action {
    readonly type = LOAD_PRODUCTOS_SUCCESS;
    constructor(public productos: Producto[], public pageable: any) {}
}

export class LoadProductosFail implements Action {
    readonly type = LOAD_PRODUCTOS_FAIL;
    constructor(public payload: any) {}
}

// ----  SEARCH   ---- //

export class SearchProductos implements Action {
    readonly type = SEARCH_PRODUCTOS;
    constructor(public termino: string) {}
}

export class SearchProductosSuccess implements Action {
    readonly type = SEARCH_PRODUCTOS_SUCCESS;
    constructor(public productos: Producto[]) {}
}

export class SearchProductosFail implements Action {
    readonly type = SEARCH_PRODUCTOS_FAIL;
    constructor(public payload: any) {}
}
export type productosAcciones = LoadProductos |
                                LoadProductosSuccess |
                                LoadProductosFail |
                                SearchProductos |
                                SearchProductosSuccess |
                                SearchProductosFail;
