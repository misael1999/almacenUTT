import * as fromUsuarios from '../../actions';
import { Usuario } from '../../../models/Usuario';
import { LOAD_USUARIOS_FAIL } from '../../actions/usuario/usuarios.actions';

export interface UsuariosState {
    usuarios: Usuario[];
    loaded: boolean;
    loading: boolean;
    error: any;
  }

  const estadoInicial: UsuariosState = {
    usuarios: [],
    loaded: false,
    loading: false,
    error: null,
  };

  export function usuariosReducer(state = estadoInicial, action: fromUsuarios.usuariosAcciones): UsuariosState {

    switch (action.type) {
        case fromUsuarios.LOAD_USUARIOS:
            return {
                ...state,
                loading: true
            };
            break;
        case fromUsuarios.LOAD_USUARIOS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                usuarios: action.usuarios
            };
            break;
        case fromUsuarios.LOAD_USUARIOS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: true,
                usuarios: [],
                error: action.payload
            };
            break;
        default:
        return state;
            break;
    }
  }

