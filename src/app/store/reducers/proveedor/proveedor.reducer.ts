import { Proveedor } from '../../../models/proveedor';
import * as fromProveedor from '../../actions';

export interface ProveedorState {
    provedor: Proveedor;
    loaded: boolean;
    loading: boolean;
    error: any;
    mensaje: any;
  }

  const estadoInicial: ProveedorState = {
    provedor: null,
    loaded: false,
    loading: false,
    error: null,
    mensaje: null
  };


  export function proveedorReducer(state = estadoInicial, action: fromProveedor.proveedorAcciones ): ProveedorState {

    switch (action.type) {
        case fromProveedor.CREATE_PROVEEDOR:
            return {
                ...state,
                loading: true,
            };
            break;
        case fromProveedor.CREATE_PROVEEDOR_SUCCESS:
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
        case fromProveedor.CREATE_PROVEEDOR_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload,
                mensaje: null
            };
            break;
        case fromProveedor.CREATE_PROVEEDOR_END:
            return {
                ...state,
                mensaje: null,
                error: null
            };
            break;
            case fromProveedor.UPDATE_PROVEEDOR:
            return {
                ...state,
                loading: true,
            };
            break;
        case fromProveedor.SELECT_PROVEEDOR:
            return {
                ...state,
                provedor: action.proveedor
            };
            break;
            case fromProveedor.UPDATE_PROVEEDOR:
            return {
                ...state,
                loading: true,
            };
            break;
        case fromProveedor.UPDATE_PROVEEDOR_SUCCESS:
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
        case fromProveedor.UPDATE_PROVEEDOR_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload,
                mensaje: null
            };
            break;
        default:
            return state;
    }

  }

