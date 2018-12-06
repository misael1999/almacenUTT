import { Action } from '@ngrx/store';
import { Factura } from '../../../models/Factura';
export const CREATE_FACTURA = '[Factura] Create factura';
export const CREATE_FACTURA_SUCCESS = '[Factura] Create factura SUCCESS';
export const CREATE_FACTURA_FAIL = '[Factura] Create factura FAIL';
export const CREATE_FACTURA_END = '[Factura] Create factura END';

export const LOAD_FACTURA = '[Factura] Load factura';
export const LOAD_FACTURA_SUCCESS = '[Factura] Load factura SUCCESS';
export const LOAD_FACTURA_FAIL = '[Factura] Load factura FAIL';

export const UPLOAD_ARCHIVO_FACTURA = '[Factura] Upload archivo factura';
export const UPLOAD_ARCHIVO_FACTURA_SUCCESS = '[Factura] Upload archivo SUCCESS';
export const UPLOAD_ARCHIVO_FACTURA_FAIL = '[Factura] Upload archivo FAIL';
export const UPLOAD_ARCHIVO_FACTURA_END = '[Factura] Upload archivo END';

export const DOWNLOAD_ARCHIVO_FACTURA = '[Factura] Download archivo factura';
export const DOWNLOAD_ARCHIVO_FACTURA_SUCCESS = '[Factura] Download archivo SUCCESS';
export const DOWNLOAD_ARCHIVO_FACTURA_FAIL = '[Factura] Download archivo FAIL';


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

// SUBIR ARCHIVO FACTURA

export class UploadArchivoFactura implements Action {
    readonly type = UPLOAD_ARCHIVO_FACTURA;
    constructor(public archivo: File, public folio: string) {}
}

export class UploadArchivoFacturaSuccess implements Action {

    readonly type = UPLOAD_ARCHIVO_FACTURA_SUCCESS;
    constructor(public payload: any) {}
}

export class UploadArchivoFacturaFail implements Action {

    readonly type = UPLOAD_ARCHIVO_FACTURA_FAIL;
    constructor(public payload: any) {}
}

export class UploadArchivoFacturaEnd implements Action {

    readonly type = UPLOAD_ARCHIVO_FACTURA_END;
    constructor() {}
}

// ----  DESCARGAR ARCHIVO   ---- //

export class DownloadArchivoFactura implements Action {
    readonly type = DOWNLOAD_ARCHIVO_FACTURA;
    constructor(public nombreArchivo: string) {}
}

export class DownloadArchivoFacturaSuccess implements Action {

    readonly type = DOWNLOAD_ARCHIVO_FACTURA_SUCCESS;
    constructor() {}
}

export class DownloadArchivoFacturaFail implements Action {

    readonly type = DOWNLOAD_ARCHIVO_FACTURA_FAIL;
    constructor(public payload: any) {}
}


export type facturaAcciones = CreateFactura |
                                CreateFacturaSuccess |
                                CreateFacturaFail |
                                CreateFacturaEnd |
                                LoadFactura |
                                LoadFacturaSuccess |
                                LoadFacturaFail |
                                UploadArchivoFactura |
                                UploadArchivoFacturaSuccess |
                                UploadArchivoFacturaFail |
                                UploadArchivoFacturaEnd |
                                DownloadArchivoFactura |
                                DownloadArchivoFacturaSuccess |
                                DownloadArchivoFacturaFail;

