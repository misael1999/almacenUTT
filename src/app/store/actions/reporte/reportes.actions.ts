import { Action } from '@ngrx/store';
import { Producto } from '../../../models/Producto';
export const LOAD_REPORTE_PRODUCTOS = '[Productos] Load reporte productos';
export const LOAD_REPORTE_PRODUCTOS_SUCCESS = '[Productos]Load reporte productos SUCCESS';
export const LOAD_REPORTE_PRODUCTOS_FAIL = '[Productos] Load reporte productos FAIL';

export class LoadReporteProductos implements Action {
    readonly type = LOAD_REPORTE_PRODUCTOS;
    constructor(public mes: number, public ano: number ) {}
}

export class LoadReporteProductosSuccess implements Action {
    readonly type = LOAD_REPORTE_PRODUCTOS_SUCCESS;
    constructor(public productos: Producto[], public pageable: any) {}
}

export class LoadReporteProductosFail implements Action {
    readonly type = LOAD_REPORTE_PRODUCTOS_FAIL;
    constructor(public payload: any) {}
}

export type reportesAcciones = LoadReporteProductos |
                                LoadReporteProductosSuccess |
                                LoadReporteProductosFail;
