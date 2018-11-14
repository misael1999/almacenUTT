import { Usuario } from '../../models/Usuario';
import * as fromAuth from '../actions';
import { State } from '@ngrx/store';

// Estado relacionado al login
export interface AuthState {
  usuario: Usuario;
  token: string;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const estadoInicial: AuthState = {
  usuario: null,
  token: null,
  loaded: false,
  loading: false,
  error: null
};

export function authReducer(
  state = estadoInicial,
  action: fromAuth.authAcciones
): AuthState {
  switch (action.type) {
    case fromAuth.LOGIN_USER:
      return {
        ...state,
        loading: true,
        error: null
      };
      break;
    case fromAuth.LOGIN_USER_SUCCESS:
      return {
        ...state,
        loading: false,
        loaded: true,
        error: null,
        token: action.token,
        usuario: {...action.usuario}

      };
      break;
    case fromAuth.LOGIN_USER_FAIL:
      return {
        ...state,
        loaded: false,
        loading: false,
        token: null,
        error: {
          error: {
            mensaje: action.payload.mensaje,
            error: action.payload.error
          }
        }
      };
      break;
    case fromAuth.LOGOUT_USER:
      return {
        ...state,
        loaded: false,
        loading: false,
        token: null,
        error: null,
        usuario: null
      };
      break;
    case fromAuth.LOGIN_USER_END:
      return {
        ...state,
        error: null,
      };
      break;
    default:
      return state;
      break;
  }
}
