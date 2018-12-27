import { Action } from '@ngrx/store';
import { ValeSalida } from '../../../models/ValeSalida';
export const CREATE_VALE_SALIDA = '[ValeSalida] Create vale salida';
export const CREATE_VALE_SALIDA_SUCCESS = '[ValeSalida] Create vale salida SUCCESS';
export const CREATE_VALE_SALIDA_FAIL = '[ValeSalida] Create vale salida FAIL';
export const CREATE_VALE_SALIDA_END = '[ValeSalida] Create vale salida END';

export const UPDATE_VALE_SALIDA = '[ValeSalida] Update vale salida';
export const UPDATE_VALE_SALIDA_SUCCESS = '[ValeSalida] Update vale salida SUCCESS';
export const UPDATE_VALE_SALIDA_FAIL = '[ValeSalida] Update vale salida FAIL';

export const LOAD_VALE_SALIDA = '[ValeSalida] Load vale salida';
export const LOAD_VALE_SALIDA_SUCCESS = '[ValeSalida] Load vale salida SUCCESS';
export const LOAD_VALE_SALIDA_FAIL = '[ValeSalida] Load vale salida FAIL';


export const UPLOAD_ARCHIVO_VALE = '[ValeSalida] Upload archivo vale salida';
export const UPLOAD_ARCHIVO_VALE_SUCCESS = '[ValeSalida] Upload archivo SUCCESS';
export const UPLOAD_ARCHIVO_VALE_FAIL = '[ValeSalida] Upload archivo FAIL';
export const UPLOAD_ARCHIVO_VALE_END = '[ValeSalida] Upload archivo END';

export const DOWNLOAD_ARCHIVO_VALE = '[ValeSalida] Download archivo';
export const DOWNLOAD_ARCHIVO_VALE_SUCCESS = '[ValeSalida] Download archivo SUCCESS';
export const DOWNLOAD_ARCHIVO_VALE_FAIL = '[ValeSalida] Download archivo FAIL';

export class CreateValeSalida implements Action {
    readonly type = CREATE_VALE_SALIDA;
    constructor(public valeSalida: ValeSalida ) { }
}

export class CreateValeSalidaSuccess implements Action {
    readonly type = CREATE_VALE_SALIDA_SUCCESS;
    constructor(public payload: any) {}
}

export class CreateValeSalidaFail implements Action {
    readonly type = CREATE_VALE_SALIDA_FAIL;
    constructor(public payLoad: any) { }
}

export class CreateValeSalidaEnd implements Action {
    readonly type = CREATE_VALE_SALIDA_END;
    constructor() {}
}

// ----  ACTUALIZAR VALE   ---- //

export class UpdateValeSalida implements Action {
    readonly type = UPDATE_VALE_SALIDA;
    constructor(public valeSalida: ValeSalida ) { }
}

export class UpdateValeSalidaSuccess implements Action {
    readonly type = UPDATE_VALE_SALIDA_SUCCESS;
    constructor(public payload: any) {}
}

export class UpdateValeSalidaFail implements Action {
    readonly type = UPDATE_VALE_SALIDA_FAIL;
    constructor(public payLoad: any) { }
}

// ----  CARGAR VALE   ---- //

export class LoadValeSalida implements Action {
    readonly type = LOAD_VALE_SALIDA;
    constructor(public idVale: number) {}
}

export class LoadValeSalidaSuccess implements Action {
    readonly type = LOAD_VALE_SALIDA_SUCCESS;
    constructor(public vale: ValeSalida) {}
}

export class LoadValeSalidaFail implements Action {
    readonly type = LOAD_VALE_SALIDA_FAIL;
    constructor(public payLoad: any) {}
}

export class UploadArchivoVale implements Action {
    readonly type = UPLOAD_ARCHIVO_VALE;
    constructor(public archivo: File, public idVale: number) {}
}

export class UploadArchivoValeSuccess implements Action {

    readonly type = UPLOAD_ARCHIVO_VALE_SUCCESS;
    constructor(public payload: any) {}
}

export class UploadArchivoValeFail implements Action {

    readonly type = UPLOAD_ARCHIVO_VALE_FAIL;
    constructor(public payload: any) {}
}

export class UploadArchivoValeEnd implements Action {

    readonly type = UPLOAD_ARCHIVO_VALE_END;
    constructor() {}
}

// ----  DESCARGAR ARCHIVO   ---- //

export class DownloadArchivoVale implements Action {
    readonly type = DOWNLOAD_ARCHIVO_VALE;
    constructor(public nombreArchivo: string) {}
}

export class DownloadArchivoValeSuccess implements Action {

    readonly type = DOWNLOAD_ARCHIVO_VALE_SUCCESS;
    constructor() {}
}

export class DownloadArchivoValeFail implements Action {

    readonly type = DOWNLOAD_ARCHIVO_VALE_FAIL;
    constructor(public payload: any) {}
}

export type valeSalidaAcciones = CreateValeSalida |
                                    CreateValeSalidaSuccess |
                                    CreateValeSalidaFail |
                                    CreateValeSalidaEnd |
                                    LoadValeSalida |
                                    LoadValeSalidaSuccess |
                                    LoadValeSalidaFail |
                                    UpdateValeSalida |
                                    UpdateValeSalidaSuccess |
                                    UpdateValeSalidaFail |
                                    UploadArchivoVale |
                                    UploadArchivoValeSuccess |
                                    UploadArchivoValeFail |
                                    UploadArchivoValeEnd |
                                    DownloadArchivoVale |
                                    DownloadArchivoValeSuccess |
                                    DownloadArchivoValeFail;
