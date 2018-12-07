import { Action } from '@ngrx/store';
export const LOAD_ESTADISTICAS_VALES = '[Estadisticas] Load Estadisticas vales';
export const LOAD_ESTADISTICAS_VALES_SUCCESS = '[Estadisticas] Load Estadisticas vales SUCCESS';
export const LOAD_ESTADISTICAS_VALES_FAIL = '[Estadisticas] Load Estadisticas vales FAIL';

export class LoadEstadisticasVale implements Action {
    readonly type = LOAD_ESTADISTICAS_VALES;
    constructor() {}
}

export class LoadEstadisticasValeSuccess implements Action {
    readonly type = LOAD_ESTADISTICAS_VALES_SUCCESS;
    constructor(public estadisticas: any) {}
}

export class LoadEstadisticasValeFail implements Action {
    readonly type = LOAD_ESTADISTICAS_VALES_FAIL;
    constructor(public payload: any) {}
}

export type estadisticasAcciones =  LoadEstadisticasVale |
                                    LoadEstadisticasValeSuccess |
                                    LoadEstadisticasValeFail;

