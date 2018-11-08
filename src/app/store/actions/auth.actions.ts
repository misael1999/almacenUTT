import { Action } from '@ngrx/store';
import { Usuario } from '../../models/Usuario';

export const LOGIN_USER = '[Auth] Login User';
export const LOGIN_USER_SUCCESS = '[Auth] Login User SUCCESS';
export const LOGIN_USER_FAIL = '[Auth] Login User FAIL';
export const LOGOUT_USER = '[Auth] Logout User';


export class LoginUser implements Action {
    readonly type = LOGIN_USER;
    constructor(public nombreUsuario: string, public password: string) {}
}

export class LoginUserSucess implements Action {

    readonly type = LOGIN_USER_SUCCESS;
    constructor(public usuario: Usuario, public token: string) {}
}

export class LoginUserFail implements Action {

    readonly type = LOGIN_USER_FAIL;
    constructor(public payload: any) {}
}

export class LogoutUser implements Action {
    readonly type = LOGOUT_USER;
}

export type authAcciones = LoginUser | LoginUserSucess | LoginUserFail | LogoutUser;


