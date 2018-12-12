import * as fromVales from 'src/app/store/actions';
import { ValeSalida } from 'src/app/models/ValeSalida';
import { ValeProducto } from '../../../models/ValeProducto';


export interface ValesState {
    vales: ValeSalida[];
    loaded: boolean;
    loading: boolean;
    error: any;
    pageable: any;
    valeProductos: ValeProducto[];
}

const estadoInicial: ValesState = {
    vales: [],
    loaded: false,
    loading: false,
    error: null,
    pageable: null,
    valeProductos: []
};

export function valesReducer (state = estadoInicial, action: fromVales.valesActions): ValesState {
    switch (action.type) {

        // Acciones de los vales de salida activos

        case fromVales.LOAD_VALES_SALIDA_ACTIVOS:
            return {
                ...state,
                loading: true
            };
        break;
        case fromVales.LOAD_VALES_SALIDA_ACTIVOS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                vales: action.vales,
                error: null,
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
        case fromVales.LOAD_VALES_SALIDA_ACTIVOS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                vales: [],
                error: action.payLoad
            };
        break;
        // VALES POR AREA
        case fromVales.LOAD_VALES_SALIDA_AREA:
        return {
            ...state,
            loading: true
        };
        break;

        case fromVales.LOAD_VALES_SALIDA_AREA_SUCCESS:
        return {
            ...state,
            loading: false,
            loaded: true,
            vales: action.vales,
            error: null
        };
        break;

        case fromVales.LOAD_VALES_SALIDA_AREA_FAIL:
        return {
            ...state,
            loading: false,
            loaded: false,
            vales: [],
            error: action.payLoad
        };
        break;
        case fromVales.SEARCH_VALES:
        return {
            ...state,
            loading: true
        };
        break;

        case fromVales.SEARCH_VALES_SUCCESS:
        return {
            ...state,
            loading: false,
            loaded: true,
            vales: [...action.vales],
            error: null
        };
        break;

        case fromVales.SEARCH_VALES_FAIL:
        return {
            ...state,
            loading: false,
            loaded: false,
            vales: [],
            error: action.payload
        };
        break;
        case fromVales.ADD_VALE_ITEM:
        return {
            ...state,
            valeProductos: [...state.valeProductos, action.valeProducto]
        };
        break;
        case fromVales.REMOVE_VALE_ITEM:
        return {
            ...state,
            valeProductos: state.valeProductos
                .filter(valeProducto => valeProducto.producto.clave !== action.clave)
        };
        break;
        case fromVales.CLEAN_VALE_ITEM:
        return {
            ...state,
            valeProductos: []
        };
        break;

        // Acciones de vales de salida entregados

        case fromVales.LOAD_VALES_SALIDA_ENTREGADOS:
            return {
                ...state,
                loading: true
            };
        break;

        case fromVales.LOAD_VALES_SALIDA_ENTREGADOS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                vales: action.vales,
                error: null
            };
        break;

        case fromVales.LOAD_VALES_SALIDA_ENTREGADOS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                vales: [],
                error: action.payLoad
            };
        break;
        default:
            return state;
        break;
    }
}
