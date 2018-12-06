import * as fromfactura from '../../actions';
import { Factura } from '../../../models/Factura';
import { facturaAcciones, CREATE_FACTURA_END, LOAD_FACTURA, UPLOAD_ARCHIVO_FACTURA } from '../../actions/factura/factura.actions';

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
        // UPLOAD ARCHIVO FACTURA
        case fromfactura.UPLOAD_ARCHIVO_FACTURA:
            return {
                ...state,
                loading: true
            };
            break;
        case fromfactura.UPLOAD_ARCHIVO_FACTURA_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                mensaje: {
                    titulo: action.payload.titulo,
                    mensaje: action.payload.mensaje,
                }
            };
            break;
        case fromfactura.UPLOAD_ARCHIVO_FACTURA_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload,
                mensaje: null
            };
            break;
        case fromfactura.UPLOAD_ARCHIVO_FACTURA_END:
            return {
                ...state,
                mensaje: null,
                error: null
            };
            break;
        // ----  DESCARGAR ARCHIVO   ---- //
        case fromfactura.DOWNLOAD_ARCHIVO_FACTURA:
            return {
                ...state,
                loading: false,
                loaded: false,
            };
            break;
        case fromfactura.DOWNLOAD_ARCHIVO_FACTURA_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true
            };
            break;
        case fromfactura.DOWNLOAD_ARCHIVO_FACTURA_FAIL:
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
            break;
    }

}
