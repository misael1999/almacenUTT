import { Action } from '@ngrx/store';
import { Usuario } from '../../../models/Usuario';

export const CREATE_USUARIO = '[Usuario] Create Usuario';
export const CREATE_USUARIO_SUCCESS = '[Usuario] Create Usuario SUCCESS';
export const CREATE_USUARIO_FAIL = '[Usuario] Create Usuario FAIL';
export const CREATE_USUARIO_END = '[Usuario] Create Usuario END';

export const SELECT_USUARIO = '[Usuario] Select Usuario';
export const UPDATE_USUARIO = '[Usuario] Update Usuario';
export const UPDATE_USUARIO_SUCCESS = '[Usuario] Update Usuario SUCCESS';
export const UPDATE_USUARIO_FAIL = '[Usuario] Update Usuario FAIL';
export const UPDATE_USUARIO_END = '[Usuario] Update Usuario END';

export const CHANGE_PASSWORD = '[Usuario] Change Password';
export const CHANGE_PASSWORD_SUCCESS = '[Usuario] Change Password SUCCESS';
export const CHANGE_PASSWORD_FAIL = '[Usuario] Change Password FAIL';
export const CHANGE_PASSWORD_END = '[Usuario] Change Password END';


// ----  CAMBIAR CONTRASEÑA   ---- //

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

// ----  CREAR USUARIO   ---- //

export class CreateUsuario implements Action {
    readonly type = CREATE_USUARIO;
    constructor(public usuario: Usuario) {}
}

export class CreateUsuarioSuccess implements Action {
    readonly type = CREATE_USUARIO_SUCCESS;
    constructor(public payload: any) {}
}

export class CreateUsuarioFail implements Action {
    readonly type = CREATE_USUARIO_FAIL;
    constructor(public payload: any) {}
}

export class CreateUsuarioEnd implements Action {
    readonly type = CREATE_USUARIO_END;
    constructor() {}
}

// ----  ACTUALIZAR USUARIO   ---- //

export class SelectUsuario implements Action {
    readonly type = SELECT_USUARIO;
    constructor(public usuario: Usuario) {}
}

export class UpdateUsuario implements Action {
    readonly type = UPDATE_USUARIO;
    constructor(public usuario: Usuario) {}
}

export class UpdateUsuarioSuccess implements Action {
    readonly type = UPDATE_USUARIO_SUCCESS;
    constructor(public payload: any) {}
}

export class UpdateUsuarioFail implements Action {
    readonly type = UPDATE_USUARIO_FAIL;
    constructor(public payload: any) {}
}

export class UpdateUsuarioEnd implements Action {
    readonly type = UPDATE_USUARIO_END;
    constructor() {}
}

export type UsuarioAcciones = ChangePassword |
                            ChangePasswordSuccess |
                            ChangePasswordFail |
                            ChangePasswordEnd |
                            CreateUsuario |
                            CreateUsuarioSuccess |
                            CreateUsuarioFail |
                            CreateUsuarioEnd |
                            SelectUsuario |
                            UpdateUsuario |
                            UpdateUsuarioSuccess |
                            UpdateUsuarioFail |
                            UpdateUsuarioEnd;
