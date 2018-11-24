
import { Action } from '@ngrx/store';
import { ValeSalida } from 'src/app/models/ValeSalida';
export const LOAD_VALES_SALIDA_ACTIVOS = '[ValeSalida] Load vales salida activos';
export const LOAD_VALES_SALIDA_ACTIVOS_SUCCESS = '[ValeSalida] Load vales salida activos SUCCESS';
export const LOAD_VALES_SALIDA_ACTIVOS_FAIL = '[ValeSalida] Load vales salida activos FAIL';
export const LOAD_VALES_SALIDA_ENTREGADOS = '[ValeSalida] Load vales salida entregados';
export const LOAD_VALES_SALIDA_ENTREGADOS_SUCCESS = '[ValeSalida] Load vales salida entregados SUCCESS';
export const LOAD_VALES_SALIDA_ENTREGADOS_FAIL = '[ValeSalida] Load vales salida entregados FAIL';

export class LoadValesSalidaActivos implements Action {
    readonly type = LOAD_VALES_SALIDA_ACTIVOS;
    constructor() {}
}

export class LoadValesSalidaActivosSuccess implements Action {
    readonly type = LOAD_VALES_SALIDA_ACTIVOS_SUCCESS;
    constructor(public vales: ValeSalida[]) {}
}

export class LoadValesSalidaActivosFail implements Action {
    readonly type = LOAD_VALES_SALIDA_ACTIVOS_FAIL;
    constructor(public payLoad: any) {}
}

export class LoadValesSalidaEntregados implements Action {
    readonly type = LOAD_VALES_SALIDA_ENTREGADOS;
    constructor() {}
}

export class LoadValesSalidaEntregadosSuccess implements Action {
    readonly type = LOAD_VALES_SALIDA_ENTREGADOS_SUCCESS;
    constructor(public vales: ValeSalida[]) {}
}

export class LoadValesSalidaEntregadosFail implements Action {
    readonly type = LOAD_VALES_SALIDA_ENTREGADOS_FAIL;
    constructor(public patLoad: any) {}
}

export type valesActions = LoadValesSalidaActivos |
                            LoadValesSalidaActivosSuccess |
                            LoadValesSalidaActivosFail |
                            LoadValesSalidaEntregados |
                            LoadValesSalidaEntregadosSuccess |
                            LoadValesSalidaEntregadosFail;
