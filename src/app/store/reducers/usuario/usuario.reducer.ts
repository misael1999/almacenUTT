import { Proveedor } from '../../../models/Proveedor';
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
    }

  }

