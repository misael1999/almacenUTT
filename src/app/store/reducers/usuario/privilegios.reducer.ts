import * as fromPrivilegios from '../../actions';
import { Privilegio } from '../../../models/Privilegio';

export interface PrivilegiosState {
    privilegios: Privilegio[];
    loaded: boolean;
    loading: boolean;
    error: any;
  }

  const estadoInicial: PrivilegiosState = {
    privilegios: [],
    loaded: false,
    loading: false,
    error: null,
  };

  export function privilegiosReducer(state = estadoInicial, action: fromPrivilegios.privilegiosAcciones): PrivilegiosState {

    switch (action.type) {
        case fromPrivilegios.LOAD_PRIVILEGIOS:
            return {
                ...state,
                loading: true
            };
            break;
        case fromPrivilegios.LOAD_PRIVILEGIOS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                privilegios: action.privilegios
            };
            break;
        case fromPrivilegios.LOAD_PRIVILEGIOS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: true,
                privilegios: [],
                error: action.payload
            };
            break;
        default:
        return state;
            break;
    }
  }

