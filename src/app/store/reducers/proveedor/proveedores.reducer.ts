import { Proveedor } from '../../../models/Proveedor';
import * as fromProveedores from '../../actions';

export interface ProveedoresState {
    provedores: Proveedor[];
    loaded: boolean;
    loading: boolean;
    error: any;
    pageable: any;
  }

  const estadoInicial: ProveedoresState = {
    provedores: [],
    loaded: false,
    loading: false,
    error: null,
    pageable: null
  };

  export function proveedoresReducer(state = estadoInicial, action: fromProveedores.proveedoresAcciones ): ProveedoresState {

    switch (action.type) {
        case fromProveedores.LOAD_PROVEEDORES:
            return {
                ...state,
                loading: true
            };
            break;
        case fromProveedores.LOAD_PROVEEDORES_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: null,
                provedores: [...action.proveedores],
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
        case fromProveedores.LOAD_PROVEEDORES_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload,
                provedores: []
            };
            break;
        case fromProveedores.LOAD_PROVEEDORES_END:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: null,
                provedores: []
            };
            break;
        case fromProveedores.SEARCH_PROVEEDORES:
            return {
                ...state,
                loading: true
            };
            break;
        case fromProveedores.SEARCH_PROVEEDORES_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: null,
                provedores: [...action.proveedores]
            };
            break;
        case fromProveedores.SEARCH_PROVEEDORES_FAIL:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: null,
                provedores: null
            };
            break;
        default:
        return state;
            break;
    }
  }
