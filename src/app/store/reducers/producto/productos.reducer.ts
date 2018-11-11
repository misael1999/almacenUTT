import { Producto } from '../../../models/Producto';
import * as fromProductos from '../../actions';

export interface ProductosState {
    productos: Producto[];
    loaded: boolean;
    loading: boolean;
    error: any;
  }

  const estadoInicial: ProductosState = {
    productos: [],
    loaded: false,
    loading: false,
    error: null,
  };


  export function productosReducer(state = estadoInicial, action: fromProductos.productosAcciones): ProductosState {

    switch (action.type) {
        case fromProductos.LOAD_PRODUCTOS:
            return {
                ...state,
                loading: true
            };
        case fromProductos.LOAD_PRODUCTOS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                productos: [...action.productos]
            };
            break;
        case fromProductos.LOAD_PRODUCTOS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload,
                productos: []
            };
            break;
        default:
            return state;
            break;
    }

  }
