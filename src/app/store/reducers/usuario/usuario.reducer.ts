import * as fromUsuarios from '../../actions';
import { Usuario } from '../../../models/Usuario';

export interface UsuarioState {
    usuario: Usuario;
    loaded: boolean;
    loading: boolean;
    error: any;
    mensaje: any;
  }

  const estadoInicial: UsuarioState = {
    usuario: null,
    loaded: false,
    loading: false,
    error: null,
    mensaje: null
  };

  export function usuarioReducer(state = estadoInicial, action: fromUsuarios.UsuarioAcciones): UsuarioState {

    switch (action.type) {
        case fromUsuarios.CHANGE_PASSWORD:
            return {
                ...state,
                loading: true
            };
            break;
        case fromUsuarios.CHANGE_PASSWORD_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                mensaje: {
                    titulo: action.payload.titulo,
                    mensaje: action.payload.mensaje
                }
            };
            break;
        case fromUsuarios.CHANGE_PASSWORD_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                mensaje: null,
                error: action.payload
            };
            break;
        case fromUsuarios.CHANGE_PASSWORD_END:
            return {
                ...state,
                loading: false,
                loaded: false,
                mensaje: null,
                error: null
            };
            break;
        default:
        return state;
        break;
        // ----  CREAR USUARIO   ---- //
        case fromUsuarios.CREATE_USUARIO:
            return {
                ...state,
                loading: true,
                usuario: action.usuario
            };
        case fromUsuarios.CREATE_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                mensaje: {
                    titulo: action.payload.titulo,
                    mensaje: action.payload.mensaje
                }
            };
            case fromUsuarios.CREATE_USUARIO_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload,
                mensaje: null
            };
            break;
        case fromUsuarios.CREATE_USUARIO_END:
            return {
                ...state,
                mensaje: null,
                error: null
            };
            break;
            // ----  ACTUALIZAR USUARIOS   ---- //
        case fromUsuarios.UPDATE_USUARIO:
            return {
                ...state,
                loading: true,
            };
            break;
        case fromUsuarios.SELECT_USUARIO:
            return {
                ...state,
                usuario: action.usuario
            };
            break;
        case fromUsuarios.UPDATE_USUARIO_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                mensaje: {
                    titulo: action.payload.titulo,
                    mensaje: action.payload.mensaje
                }
            };
            break;
        case fromUsuarios.UPDATE_USUARIO_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload,
                mensaje: null
            };
            break;
        // OBTENER_USUARIO
        case fromUsuarios.LOAD_USUARIO:
            return {
            ...state,
            loading: true,
            };
        break;
        case fromUsuarios.LOAD_USUARIO_SUCCESS:
            return {
            ...state,
            loading: false,
            loaded: true,
            usuario: action.usuario
            };
        break;
        case fromUsuarios.LOAD_USUARIO_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            };
        break;
    }

  }

