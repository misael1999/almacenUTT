 import * as fromVale from 'src/app/store/actions';
import { ValeSalida } from 'src/app/models/valeSalida';
import { valeSalidaAcciones, CREATE_VALE_SALIDA_END, LOAD_VALE_SALIDA } from 'src/app/store/actions/vales/vale.actions';


export interface ValeState {
    vale: ValeSalida;
    loaded: boolean;
    loading: boolean;
    error: any;
    mensaje: any;
    idValeSalida: number;
}

const estadoInicial: ValeState = {
    vale: null,
    loaded: false,
    loading: false,
    error: null,
    mensaje: null,
    idValeSalida: null
};

export function valeReducer(state = estadoInicial, action: fromVale.valeSalidaAcciones): ValeState {
    switch (action.type) {
        case fromVale.CREATE_VALE_SALIDA:
            return {
                ...state,
                loading: true
            };
        break;
        case fromVale.CREATE_VALE_SALIDA_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                mensaje: {
                    titulo: action.payload.titulo,
                    mensaje: action.payload.mensaje,
                },
                idValeSalida: action.payload.idVale

            };
        break;
        case fromVale.CREATE_VALE_SALIDA_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payLoad,
                mensaje: null
            };
        break;
        case fromVale.CREATE_VALE_SALIDA_END:
            return {
                ...state,
                mensaje: null,
                error: null
            };
        break;
        // ----  ACTUALIZAR VALE DE SALIDA   ---- //
        case fromVale.UPDATE_VALE_SALIDA:
            return {
                ...state,
                loading: true
            };
        break;
        case fromVale.UPDATE_VALE_SALIDA_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                mensaje: {
                    titulo: action.payload.titulo,
                    mensaje: action.payload.mensaje,
                },
                idValeSalida: action.payload.idVale

            };
        break;
        case fromVale.UPDATE_VALE_SALIDA_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payLoad,
                mensaje: null
            };
        break;
        case fromVale.LOAD_VALE_SALIDA:
            return {
                ...state,
                loading: true,
                loaded: false
            };
        break;
        case fromVale.LOAD_VALE_SALIDA_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                vale: { ...action.vale },
                mensaje: null
            };
        break;
        case fromVale.LOAD_VALE_SALIDA_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                vale: null,
                error: action.payLoad
            };
        break;
         // UPLOAD ARCHIVO FACTURA
         case fromVale.UPLOAD_ARCHIVO_VALE:
         return {
             ...state,
             loading: true
         };
         break;
     case fromVale.UPLOAD_ARCHIVO_VALE_SUCCESS:
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
     case fromVale.UPLOAD_ARCHIVO_VALE_FAIL:
         return {
             ...state,
             loading: false,
             loaded: false,
             error: action.payload,
             mensaje: null
         };
         break;
     case fromVale.UPLOAD_ARCHIVO_VALE_END:
         return {
             ...state,
             mensaje: null,
             error: null
         };
         break;
     // ----  DESCARGAR ARCHIVO   ---- //
     case fromVale.DOWNLOAD_ARCHIVO_VALE:
         return {
             ...state,
             loading: false,
             loaded: false,
         };
         break;
     case fromVale.DOWNLOAD_ARCHIVO_VALE_SUCCESS:
         return {
             ...state,
             loading: false,
             loaded: true
         };
         break;
     case fromVale.DOWNLOAD_ARCHIVO_VALE_FAIL:
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
