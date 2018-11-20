import { Action } from '@ngrx/store';
import { Area } from '../../../models/Area';
export const LOAD_AREAS = '[Areas] Load areas';
export const LOAD_AREAS_SUCCESS = '[Areas] Load areas SUCCESS';
export const LOAD_AREAS_FAIL = '[Areas] Load areas FAIL';

export class LoadAreas implements Action {
    readonly type = LOAD_AREAS;
    constructor() {}
}

export class LoadAreasSuccess implements Action {
    readonly type = LOAD_AREAS_SUCCESS;
    constructor(public areas: Area[]) {}
}

export class LoadAreasFail implements Action {
    readonly type = LOAD_AREAS_FAIL;
    constructor(public payload: any) {}
}

export type areassAcciones = LoadAreas |
                                LoadAreasSuccess |
                                LoadAreasFail;

