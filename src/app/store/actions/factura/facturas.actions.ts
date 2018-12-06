import { Action } from '@ngrx/store';
import { Factura } from '../../../models/Factura';
export const LOAD_FACTURAS_ACTIVAS = '[Facturas] Load facturas activas';
export const LOAD_FACTURAS_ACTIVAS_SUCCESS = '[Facturas] Load facturas activas SUCCESS';
export const LOAD_FACTURAS_ACTIVAS_FAIL = '[Facturas] Load facturas activas FAIL';

export const LOAD_FACTURAS_ENTREGADAS = '[Facturas] load facturas entregadas';
export const LOAD_FACTURAS_ENTREGADAS_SUCCESS = '[Facturas] load facturas entregadas SUCCESS';
export const LOAD_FACTURAS_ENTREGADAS_FAIL = '[Facturas] load facturas entregadas FAIL';

export const LOAD_FACTURAS_WITH_DOCUMENTS = '[Facturas] load facturas documents';
export const LOAD_FACTURAS_WITH_DOCUMENTS_SUCCESS = '[Facturas] load facturas documents SUCCESS';
export const LOAD_FACTURAS_WITH_DOCUMENTS_FAIL = '[Facturas] load facturas documents FAIL';

export const SEARCH_FACTURAS = '[Facturas] Search facturas';
export const SEARCH_FACTURAS_SUCCESS = '[Facturas] Search facturas SUCCESS';
export const SEARCH_FACTURAS_FAIL = '[Facturas] Search facturas FAIL';

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

// ----  FACTURAS ENTREGADAS   ---- //
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

// FACTURAS CON DOCUMENTOS

export class LoadFacturasWithDocuments implements Action {
    readonly type = LOAD_FACTURAS_WITH_DOCUMENTS;
    constructor(public page: number) {}
}

export class LoadFacturasWithDocumentsSuccess implements Action {
    readonly type = LOAD_FACTURAS_WITH_DOCUMENTS_SUCCESS;
    constructor(public facturas: Factura[], public pageable: any) {}
}

export class LoadFacturasWithDocumentsFail implements Action {
    readonly type = LOAD_FACTURAS_WITH_DOCUMENTS_FAIL;
    constructor(public payload: any) {}
}


// ----  BUSCAR FACTURAS   ---- //

export class SearchFacturas implements Action {
    readonly type = SEARCH_FACTURAS;
    constructor(public termino: string) {}
}

export class SearchFacturasSuccess implements Action {
    readonly type = SEARCH_FACTURAS_SUCCESS;
    constructor(public facturas: Factura[]) {}
}

export class SearchFacturasFail implements Action {
    readonly type = SEARCH_FACTURAS_FAIL;
    constructor(public payload: any) {}
}



export type facturasAcciones =  LoadFacturasActivas |
                                LoadFacturasActivasSuccess |
                                LoadFacturasActivasFail |
                                LoadFacturasEntregadas |
                                LoadFacturasEntregadasSuccess |
                                LoadFacturasEntregadasFail |
                                SearchFacturas |
                                SearchFacturasSuccess |
                                SearchFacturasFail |
                                LoadFacturasWithDocuments |
                                LoadFacturasWithDocumentsSuccess |
                                LoadFacturasWithDocumentsFail;

