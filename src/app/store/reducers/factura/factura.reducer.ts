import * as fromfactura from '../../actions';
import { Factura } from '../../../models/factura';

export interface FacturaState {
    factura: Factura;
    loaded: boolean;
    loading: boolean;
    error: any;
    mensaje: any;
}

const estadoInicial: FacturaState = {
    factura: null,
    loaded: false,
    loading: false,
    error: null,
    mensaje: null
};

export function facturaReducer(state = estadoInicial, action: fromfactura.facturaAcciones): FacturaState {

    switch (action.type) {
        case fromfactura.CREATE_FACTURA:
            return {
                ...state,
                loading: true
            };
            break;
        case fromfactura.CREATE_FACTURA_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                mensaje: {
                    titulo: action.payload.titulo,
                    mensaje: action.payload.mensaje,
                    folio: action.payload.folio
                }
            };
            break;
        case fromfactura.CREATE_FACTURA_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload,
                mensaje: null
            };
            break;
        case fromfactura.CREATE_FACTURA_END:
            return {
                ...state,
                mensaje: null,
                error: null
            };
            break;
        // ACTUALIZAR FACTURA
        case fromfactura.UPDATE_FACTURA:
            return {
                ...state,
                loading: true
            };
            break;
        case fromfactura.UPDATE_FACTURA_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                mensaje: {
                    titulo: action.payload.titulo,
                    mensaje: action.payload.mensaje,
                    folio: action.payload.folio
                }
            };
            break;
        case fromfactura.UPDATE_FACTURA_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload,
                mensaje: null
            };
            break;
        case fromfactura.UPDATE_FACTURA_END:
            return {
                ...state,
                mensaje: null,
                error: null
            };
            break;
        // OBTENER FACTURA
        case fromfactura.LOAD_FACTURA:
            return {
                ...state,
                loading: true
            };
            break;
        case fromfactura.LOAD_FACTURA_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                factura: { ...action.factura },
                mensaje: null
            };
            break;
        case fromfactura.LOAD_FACTURA_FAIL:
            return {
                ...state,
                loading: false,
                loaded: true,
                factura: null,
                error: action.payload
            };
            break;
        case fromfactura.LOAD_FACTURA_END:
            return {
                ...state,
                loading: false,
                loaded: true,
                factura: null,
                error: null
            };
            break;
        default:
            return state;
            break;
    }

}
