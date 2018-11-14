import { Action } from '@ngrx/store';
import { Factura } from '../../../models/Factura';
export const CREATE_FACTURA = '[Proveedor] Create factura';
export const CREATE_FACTURA_SUCCESS = '[Proveedor] Create factura SUCCESS';
export const CREATE_FACTURA_FAIL = '[Proveedor] Create factura FAIL';
export const CREATE_FACTURA_END = '[Proveedor] Create factura END';

export class CreateFactura implements Action {
    readonly type = CREATE_FACTURA;
    constructor(public factura: Factura) {}
}

export class CreateFacturaSuccess implements Action {

    readonly type = CREATE_FACTURA_SUCCESS;
    constructor(public payload: any) {}
}

export class CreateFacturaFail implements Action {

    readonly type = CREATE_FACTURA_FAIL;
    constructor(public payload: any) {}
}
export class CreateFacturaEnd implements Action {

    readonly type = CREATE_FACTURA_END;
    constructor() {}
}

export type facturaAcciones = CreateFactura | CreateFacturaSuccess | CreateFacturaFail | CreateFacturaEnd;

