import { Action } from '@ngrx/store';
import { Privilegio } from '../../../models/Privilegio';
export const LOAD_PRIVILEGIOS = '[Privilegios] Load Privilegios';
export const LOAD_PRIVILEGIOS_SUCCESS = '[Privilegios] Load Privilegios SUCCESS';
export const LOAD_PRIVILEGIOS_FAIL = '[Privilegios] Load Privilegios FAIL';

export class LoadPrivilegios implements Action {
    readonly type = LOAD_PRIVILEGIOS;
    constructor() {}
}

export class LoadPrivilegiosSuccess implements Action {
    readonly type = LOAD_PRIVILEGIOS_SUCCESS;
    constructor(public privilegios: Privilegio[]) {}
}

export class LoadPrivilegiosFail implements Action {
    readonly type = LOAD_PRIVILEGIOS_FAIL;
    constructor(public payload: any) {}
}

export type privilegiosAcciones = LoadPrivilegios |
                                LoadPrivilegiosSuccess |
                                LoadPrivilegiosFail;
