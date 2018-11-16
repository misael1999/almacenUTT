import { Action } from '@ngrx/store';
export const CHANGE_PASSWORD = '[Usuario] Change Password';
export const CHANGE_PASSWORD_SUCCESS = '[Usuario] Change Password SUCCESS';
export const CHANGE_PASSWORD_FAIL = '[Usuario] Change Password FAIL';
export const CHANGE_PASSWORD_END = '[Usuario] Change Password END';


export class ChangePassword implements Action {
    readonly type = CHANGE_PASSWORD;
    constructor(public passwordAnterior, public passwordNueva) {}
}

export class ChangePasswordSuccess implements Action {
    readonly type = CHANGE_PASSWORD_SUCCESS;
    constructor(public payload: any) {}
}

export class ChangePasswordFail implements Action {
    readonly type = CHANGE_PASSWORD_FAIL;
    constructor(public payload: any) {}
}

export class ChangePasswordEnd implements Action {
    readonly type = CHANGE_PASSWORD_END;
    constructor() {}
}

export type UsuarioAcciones = ChangePassword |
                            ChangePasswordSuccess |
                            ChangePasswordFail |
                            ChangePasswordEnd;
