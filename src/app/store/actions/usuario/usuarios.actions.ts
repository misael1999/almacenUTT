import { Action } from '@ngrx/store';
import { Usuario } from '../../../models/Usuario';
export const LOAD_USUARIOS = '[Usuarios] Load Usuarios';
export const LOAD_USUARIOS_SUCCESS = '[Usuarios] Load Usuarios SUCCESS';
export const LOAD_USUARIOS_FAIL = '[Usuarios] Load Usuarios FAIL';

export class LoadUsuarios implements Action {
    readonly type = LOAD_USUARIOS;
    constructor() {}
}

export class LoadUsuariosSuccess implements Action {
    readonly type = LOAD_USUARIOS_SUCCESS;
    constructor(public usuarios: Usuario[]) {}
}

export class LoadUsuariosFail implements Action {
    readonly type = LOAD_USUARIOS_FAIL;
    constructor(public payload: any) {}
}

export type usuariosAcciones = LoadUsuarios |
                                LoadUsuariosSuccess |
                                LoadUsuariosFail;
