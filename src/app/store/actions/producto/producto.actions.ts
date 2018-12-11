import { Action } from '@ngrx/store';
import { Producto } from '../../../models/Producto';
export const CREATE_PRODUCTO = '[Producto] Create producto';
export const CREATE_PRODUCTO_SUCCESS = '[Producto] Create producto SUCCESS';
export const CREATE_PRODUCTO_FAIL = '[Producto] Create producto FAIL';
export const CREATE_PRODUCTO_END = '[Producto] Create producto END';

export const SELECT_PRODUCTO = '[Producto] Select producto';

export const UPDATE_PRODUCTO = '[Producto] Update producto';
export const UPDATE_PRODUCTO_SUCCESS = '[Producto] Update producto SUCCESS';
export const UPDATE_PRODUCTO_FAIL = '[Producto] Update producto FAIL';


export class CreateProducto implements Action {
    readonly type = CREATE_PRODUCTO;
    constructor(public producto: Producto) {}
}

export class CreateProductoSuccess implements Action {

    readonly type = CREATE_PRODUCTO_SUCCESS;
    constructor(public payload: any) {}
}

export class CreateProductoFail implements Action {

    readonly type = CREATE_PRODUCTO_FAIL;
    constructor(public payload: any) {}
}
export class CreateProductoEnd implements Action {

    readonly type = CREATE_PRODUCTO_END;
    constructor() {}
}

export class SelectProducto implements Action {
    readonly type = SELECT_PRODUCTO;
    constructor(public producto: Producto) {}
}

export class UpdateProducto implements Action {
    readonly type = UPDATE_PRODUCTO;
    constructor(public producto: Producto) {}
}

export class UpdateProductoSuccess implements Action {

    readonly type = UPDATE_PRODUCTO_SUCCESS;
    constructor(public payload: any) {}
}

export class UpdateProductoFail implements Action {

    readonly type = UPDATE_PRODUCTO_FAIL;
    constructor(public payload: any) {}
}

export type productoAcciones = CreateProducto |
                                CreateProductoSuccess |
                                CreateProductoFail |
                                CreateProductoEnd |
                                UpdateProducto |
                                UpdateProductoSuccess|
                                SelectProducto |
                                UpdateProductoFail;
