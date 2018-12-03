import { Action } from '@ngrx/store';
import { Factura } from '../../../models/Factura';
export const LOAD_FACTURAS_ACTIVAS = '[Facturas] Load facturas activas';
export const LOAD_FACTURAS_ACTIVAS_SUCCESS = '[Facturas] Load facturas activas SUCCESS';
export const LOAD_FACTURAS_ACTIVAS_FAIL = '[Facturas] Load facturas activas FAIL';

export const LOAD_FACTURAS_ENTREGADAS = '[Facturas] load facturas entregadas';
export const LOAD_FACTURAS_ENTREGADAS_SUCCESS = '[Facturas] load facturas entregadas SUCCESS';
export const LOAD_FACTURAS_ENTREGADAS_FAIL = '[Facturas] load facturas entregadas FAIL';

export class LoadFacturasActivas implements Action {
    readonly type = LOAD_FACTURAS_ACTIVAS;
    constructor(public page: number) {}
}

export class LoadFacturasActivasSuccess implements Action {
    readonly type = LOAD_FACTURAS_ACTIVAS_SUCCESS;
    constructor(public facturas: Factura[], public pageable: any) {}
}

export class LoadFacturasActivasFail implements Action {
    readonly type = LOAD_FACTURAS_ACTIVAS_FAIL;
    constructor(public payload: any) {}
}

export class LoadFacturasEntregadas implements Action {
    readonly type = LOAD_FACTURAS_ENTREGADAS;
    constructor(public page: number) {}
}

export class LoadFacturasEntregadasSuccess implements Action {
    readonly type = LOAD_FACTURAS_ENTREGADAS_SUCCESS;
    constructor(public facturas: Factura[], public pageable: any) {}
}

export class LoadFacturasEntregadasFail implements Action {
    readonly type = LOAD_FACTURAS_ENTREGADAS_FAIL;
    constructor(public payload: any) {}
}


export type facturasAcciones =  LoadFacturasActivas |
                                LoadFacturasActivasSuccess |
                                LoadFacturasActivasFail |
                                LoadFacturasEntregadas |
                                LoadFacturasEntregadasSuccess |
                                LoadFacturasEntregadasFail;


