import { Action } from '@ngrx/store';
export const LOAD_REPORTE_PRODUCTOS = '[Reportes] Load reporte productos';
export const LOAD_REPORTE_PRODUCTOS_SUCCESS = '[Reportes]Load reporte productos SUCCESS';
export const LOAD_REPORTE_PRODUCTOS_FAIL = '[Reportes] Load reporte productos FAIL';

export const LOAD_REPORTE_AREAS = '[Reportes] Load reporte areas';
export const LOAD_REPORTE_AREAS_SUCCESS = '[Reportes] Load reporte areas SUCCESS';
export const LOAD_REPORTE_AREAS_FAIL = '[Reportes] Load reporte areas FAIL';

export const LOAD_REPORTE_PRODUCTOS_PROVEEDORES = '[Reportes] Load reporte productos proveedores';
export const LOAD_REPORTE_PRODUCTOS_PROVEEDORES_SUCCESS = '[Reportes] Load productos proveedores SUCCESS';
export const LOAD_REPORTE_PRODUCTOS_PROVEEDORES_FAIL = '[Reportes] Load reporte productos proveedores FAIL';

export const LOAD_REPORTE_GASTOS_AREA = '[Reportes] Load reporte gasto areas';
export const LOAD_REPORTE_GASTOS_AREA_SUCCESS = '[Reportes] Load reporte gasto areas SUCCESS';
export const LOAD_REPORTE_GASTOS_AREA_FAIL = '[Reportes] Load reporte gasto areas FAIL';

export const GENERATE_VALE_SALIDA = '[Reportes] Generate vale salida';
export const GENERATE_VALE_SALIDA_SUCCESS = '[Reportes] Generate vale salida SUCCESS';
export const GENERATE_VALE_SALIDA_FAIL = '[Reportes] Generate vale salida FAIL';

export const LOAD_REPORTES_END = '[Reportes] Load reporte END';

export class LoadReporteProductos implements Action {
    readonly type = LOAD_REPORTE_PRODUCTOS;
    constructor(public mes: number, public ano: number ) {}
}

export class LoadReporteProductosSuccess implements Action {
    readonly type = LOAD_REPORTE_PRODUCTOS_SUCCESS;
    constructor() {}
}

export class LoadReporteProductosFail implements Action {
    readonly type = LOAD_REPORTE_PRODUCTOS_FAIL;
    constructor(public payload: any) {}
}

// ----  REPORTES DE PRODUCTOS POR AREAS   ---- //

export class LoadReporteAreas implements Action {
    readonly type = LOAD_REPORTE_AREAS;
    constructor(public idArea: number, public del: string, public al: string ) {}
}

export class LoadReporteAreasSuccess implements Action {
    readonly type = LOAD_REPORTE_AREAS_SUCCESS;
    constructor() {}
}

export class LoadReporteAreasFail implements Action {
    readonly type = LOAD_REPORTE_AREAS_FAIL;
    constructor(public payload: any) {}
}

// ----  LOAD PRODUCTOS PROVEEDORES   ---- //

export class LoadReporteProductosProveedores implements Action {
    readonly type = LOAD_REPORTE_PRODUCTOS_PROVEEDORES;
    constructor(public proveedor: string ) {}
}

export class LoadReporteProductosProveedoresSuccess implements Action {
    readonly type = LOAD_REPORTE_PRODUCTOS_PROVEEDORES_SUCCESS;
    constructor() {}
}

export class LoadReporteProductosProveedoresFail implements Action {
    readonly type = LOAD_REPORTE_PRODUCTOS_PROVEEDORES_FAIL;
    constructor(public payload: any) {}
}

// ----  LOAD REPORTES DE GASTOS POR AREA   ---- //

export class LoadReporteGastoAreas implements Action {
    readonly type = LOAD_REPORTE_GASTOS_AREA;
    constructor(public del: string, public al: string ) {}
}

export class LoadReporteGastoAreasSuccess implements Action {
    readonly type = LOAD_REPORTE_GASTOS_AREA_SUCCESS;
    constructor() {}
}

export class LoadReporteGastoAreasFail implements Action {
    readonly type = LOAD_REPORTE_GASTOS_AREA_FAIL;
    constructor(public payload: any) {}
}

export class GenerateValeSalida implements Action {
    readonly type = GENERATE_VALE_SALIDA;
    constructor(public idVale: number) {}
}

export class GenerateValeSalidaSuccess implements Action {
    readonly type = GENERATE_VALE_SALIDA_SUCCESS;
    constructor() {}
}

export class GenerateValeSalidaFail implements Action {
    readonly type = GENERATE_VALE_SALIDA_FAIL;
    constructor(public payload: any) {}
}

// ----  END   ---- //
export class LoadReportesEnd implements Action {
    readonly type = LOAD_REPORTES_END;
    constructor() {}
}

export type reportesAcciones = LoadReporteProductos |
                                LoadReporteProductosSuccess |
                                LoadReporteProductosFail |
                                LoadReporteAreas |
                                LoadReporteAreasSuccess |
                                LoadReporteAreasFail |
                                LoadReporteProductosProveedores |
                                LoadReporteProductosProveedoresSuccess |
                                LoadReporteProductosProveedoresFail |
                                LoadReporteGastoAreas |
                                LoadReporteGastoAreasSuccess |
                                LoadReporteGastoAreasFail |
                                LoadReportesEnd |
                                GenerateValeSalida |
                                GenerateValeSalidaSuccess |
                                GenerateValeSalidaFail;