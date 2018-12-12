import { Action } from '@ngrx/store';
import { ValeSalida } from '../../../models/ValeSalida';
export const CREATE_VALE_SALIDA = '[ValeSalida] Create vale salida';
export const CREATE_VALE_SALIDA_SUCCESS = '[ValeSalida] Create vale salida SUCCESS';
export const CREATE_VALE_SALIDA_FAIL = '[ValeSalida] Create vale salida FAIL';
export const CREATE_VALE_SALIDA_END = '[ValeSalida] Create vale salida END';
export const LOAD_VALE_SALIDA = '[ValeSalida] Load vale salida';
export const LOAD_VALE_SALIDA_SUCCESS = '[ValeSalida] Load vale salida SUCCESS';
export const LOAD_VALE_SALIDA_FAIL = '[ValeSalida] Load vale salida FAIL';

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

export class LoadValeSalida implements Action {
    readonly type = LOAD_VALE_SALIDA;
    constructor(public numeroRequisicion: number) {}
}

export class LoadValeSalidaSuccess implements Action {
    readonly type = LOAD_VALE_SALIDA_SUCCESS;
    constructor(public vale: ValeSalida) {}
}

export class LoadValeSalidaFail implements Action {
    readonly type = LOAD_VALE_SALIDA_FAIL;
    constructor(public payLoad: any) {}
}

export type valeSalidaAcciones = CreateValeSalida |
                                    CreateValeSalidaSuccess |
                                    CreateValeSalidaFail |
                                    CreateValeSalidaEnd |
                                    LoadValeSalida |
                                    LoadValeSalidaSuccess |
                                    LoadValeSalidaFail;
