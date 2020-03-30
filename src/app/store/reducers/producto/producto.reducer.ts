import { Producto } from '../../../models/producto';
import * as fromProducto from '../../actions';

export interface ProductoState {
    producto: Producto;
    loaded: boolean;
    loading: boolean;
    error: any;
    mensaje: any;
  }

  const estadoInicial: ProductoState = {
    producto: null,
    loaded: false,
    loading: false,
    error: null,
    mensaje: null
  };


  export function productoReducer(state = estadoInicial, action: fromProducto.productoAcciones ): ProductoState {

    switch (action.type) {
        case fromProducto.CREATE_PRODUCTO:
            return {
                ...state,
                loading: true,
            };
            break;
        case fromProducto.CREATE_PRODUCTO_SUCCESS:
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
        case fromProducto.CREATE_PRODUCTO_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload,
                mensaje: null
            };
            break;
        case fromProducto.CREATE_PRODUCTO_END:
            return {
                ...state,
                mensaje: null,
                error: null
            };
            break;
            case fromProducto.UPDATE_PRODUCTO:
            return {
                ...state,
                loading: true,
            };
            break;
        case fromProducto.SELECT_PRODUCTO:
            return {
                ...state,
                producto: action.producto
            };
            break;
            case fromProducto.UPDATE_PRODUCTO:
            return {
                ...state,
                loading: true,
            };
            break;
        case fromProducto.UPDATE_PRODUCTO_SUCCESS:
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
        case fromProducto.UPDATE_PRODUCTO_FAIL:
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

