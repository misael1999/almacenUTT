import { Action } from '@ngrx/store';
import { Area } from '../../../models/Area';

export const CREATE_AREA = '[Area] Create Area';
export const CREATE_AREA_SUCCESS = '[Area] Create Area SUCCESS';
export const CREATE_AREA_FAIL = '[Area] Create Area FAIL';
export const CREATE_AREA_END = '[Area] Create Area END';

export const SELECT_AREA = '[Area] Select Area';
export const UPDATE_AREA = '[Area] Update Area';
export const UPDATE_AREA_SUCCESS = '[Area] Update Area SUCCESS';
export const UPDATE_AREA_FAIL = '[Area] Update Area FAIL';
export const UPDATE_AREA_END = '[Area] Update Area END';


// ----  CREAR Area   ---- //

export class CreateArea implements Action {
    readonly type = CREATE_AREA;
    constructor(public area: Area) {}
}

export class CreateAreaSuccess implements Action {
    readonly type = CREATE_AREA_SUCCESS;
    constructor(public payload: any) {}
}

export class CreateAreaFail implements Action {
    readonly type = CREATE_AREA_FAIL;
    constructor(public payload: any) {}
}

export class CreateAreaEnd implements Action {
    readonly type = CREATE_AREA_END;
    constructor() {}
}

// ----  ACTUALIZAR Area   ---- //

export class SelectArea implements Action {
    readonly type = SELECT_AREA;
    constructor(public area: Area) {}
}

export class UpdateArea implements Action {
    readonly type = UPDATE_AREA;
    constructor(public area: Area) {}
}

export class UpdateAreaSuccess implements Action {
    readonly type = UPDATE_AREA_SUCCESS;
    constructor(public payload: any) {}
}

export class UpdateAreaFail implements Action {
    readonly type = UPDATE_AREA_FAIL;
    constructor(public payload: any) {}
}

export class UpdateAreaEnd implements Action {
    readonly type = UPDATE_AREA_END;
    constructor() {}
}
export type AreaAcciones =  CreateArea |
                            CreateAreaSuccess |
                            CreateAreaFail |
                            CreateAreaEnd |
                            SelectArea |
                            UpdateArea |
                            UpdateAreaSuccess |
                            UpdateAreaFail |
                            UpdateAreaEnd;
