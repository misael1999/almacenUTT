import { Producto } from '../../../models/producto';
import * as fromProductos from '../../actions';

export interface ProductosState {
    productos: Producto[];
    loaded: boolean;
    loading: boolean;
    error: any;
    pageable: any;
  }

  const estadoInicial: ProductosState = {
    productos: [],
    loaded: false,
    loading: false,
    error: null,
    pageable: null
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
                productos: [...action.productos],
                pageable: {
                    pageable: action.pageable.pageable,
                    totalPages: action.pageable.totalPages,
                    totalElements: action.pageable.totalElements,
                    last: action.pageable.last,
                    size: action.pageable.size,
                    number: action.pageable.number,
                    numberOfElements: action.pageable.numberOfElements,
                    first: action.pageable.first
                    }
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
            case fromProductos.SEARCH_PRODUCTOS:
            return {
                ...state,
                loading: true
            };
            break;
        case fromProductos.SEARCH_PRODUCTOS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: null,
                productos: [...action.productos]
            };
            break;
        case fromProductos.SEARCH_PRODUCTOS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: null,
                productos: null
            };
            break;
        default:
            return state;
            break;
    }

  }
