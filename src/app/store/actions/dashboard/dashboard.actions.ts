import { Action } from '@ngrx/store';
export const LOAD_INFO = '[Dashboard] Load info';
export const LOAD_INFO_SUCCESS = '[Dashboard] Load info SUCCESS';
export const LOAD_INFO_FAIL = '[Dashboard] Load info FAIL';
export const LOAD_INFO_END = '[Dashboard] Load info END';



export class LoadInfo implements Action {
    readonly type = LOAD_INFO;
    constructor() {}
}

export class LoadInfoSuccess implements Action {

    readonly type = LOAD_INFO_SUCCESS;
    constructor(public payload: any) {}
}

export class LoadInfoFail implements Action {

    readonly type = LOAD_INFO_FAIL;
    constructor(public payload: any) {}
}
export class LoadInfoEnd implements Action {

    readonly type = LOAD_INFO_END;
    constructor() {}
}

export type dashboardAcciones = LoadInfo |
                                LoadInfoSuccess |
                                LoadInfoFail |
                                LoadInfoEnd;

