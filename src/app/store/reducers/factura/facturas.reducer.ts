import * as fromFacturas from '../../actions';
import { Factura } from 'src/app/models/Factura';
import { LOAD_FACTURAS_ENTREGADAS } from '../../actions/factura/facturas.actions';

export interface FacturasState {
    facturas: Factura[];
    loaded: boolean;
    loading: boolean;
    error: any;
    pageable: any;
}

const estadoInicial: FacturasState = {
    facturas: [],
    loaded: false,
    loading: false,
    error: null,
    pageable: null
};

export function facturasReducer(state = estadoInicial, action: fromFacturas.facturasAcciones): FacturasState {

    switch (action.type) {
        // ----  ACCIONES DE FACTURAS EN ALMACEN/ACTIVAS   ---- //
        case fromFacturas.LOAD_FACTURAS_ACTIVAS:
            return {
                ...state,
                loading: true
            };
            break;
        case fromFacturas.LOAD_FACTURAS_ACTIVAS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                facturas: action.facturas,
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
        case fromFacturas.LOAD_FACTURAS_ACTIVAS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                facturas: [],
                error: action.payload
            };
            break;
        // ---- ACCIONES DE FACTURAS ENTREGADAS    ---- //
        case fromFacturas.LOAD_FACTURAS_ENTREGADAS:
            return {
                ...state,
                loading: true
            };
            break;
        case fromFacturas.LOAD_FACTURAS_ENTREGADAS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                facturas: action.facturas,
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
        case fromFacturas.LOAD_FACTURAS_ENTREGADAS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                facturas: [],
                error: action.payload
            };
            break;
        default:
            return state;
            break;
    }

}

