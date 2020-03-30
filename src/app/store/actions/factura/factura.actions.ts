import { Action } from '@ngrx/store';
import { Factura } from '../../../models/factura';
export const CREATE_FACTURA = '[Factura] Create factura';
export const CREATE_FACTURA_SUCCESS = '[Factura] Create factura SUCCESS';
export const CREATE_FACTURA_FAIL = '[Factura] Create factura FAIL';
export const CREATE_FACTURA_END = '[Factura] Create factura END';

export const UPDATE_FACTURA = '[Factura] Update factura';
export const UPDATE_FACTURA_SUCCESS = '[Factura] Update factura SUCCESS';
export const UPDATE_FACTURA_FAIL = '[Factura] Update factura FAIL';
export const UPDATE_FACTURA_END = '[Factura] Update factura END';

export const LOAD_FACTURA = '[Factura] Load factura';
export const LOAD_FACTURA_SUCCESS = '[Factura] Load factura SUCCESS';
export const LOAD_FACTURA_FAIL = '[Factura] Load factura FAIL';
export const LOAD_FACTURA_END = '[Factura] Load factura END';



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

// ACTUALIZAR FACTURA

export class UpdateFactura implements Action {
    readonly type = UPDATE_FACTURA;
    constructor(public factura: Factura) {}
}

export class UpdateFacturaSuccess implements Action {

    readonly type = UPDATE_FACTURA_SUCCESS;
    constructor(public payload: any) {}
}

export class UpdateFacturaFail implements Action {

    readonly type = UPDATE_FACTURA_FAIL;
    constructor(public payload: any) {}
}
export class UpdateFacturaEnd implements Action {

    readonly type = UPDATE_FACTURA_END;
    constructor() {}
}

// CARGAR FACTURA

export class LoadFactura implements Action {
    readonly type = LOAD_FACTURA;
    constructor(public folio: string) {}
}

export class LoadFacturaSuccess implements Action {

    readonly type = LOAD_FACTURA_SUCCESS;
    constructor(public factura: Factura) {}
}

export class LoadFacturaFail implements Action {

    readonly type = LOAD_FACTURA_FAIL;
    constructor(public payload: any) {}
}
export class LoadFacturaEnd implements Action {

    readonly type = LOAD_FACTURA_END;
    constructor() {}
}



export type facturaAcciones = CreateFactura |
                                CreateFacturaSuccess |
                                CreateFacturaFail |
                                CreateFacturaEnd |
                                UpdateFactura |
                                UpdateFacturaSuccess |
                                UpdateFacturaFail |
                                UpdateFacturaEnd |
                                LoadFactura |
                                LoadFacturaSuccess |
                                LoadFacturaFail |
                                LoadFacturaEnd;

