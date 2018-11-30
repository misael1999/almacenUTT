 import * as fromVale from 'src/app/store/actions';
import { ValeSalida } from 'src/app/models/ValeSalida';
import { valeSalidaAcciones, CREATE_VALE_SALIDA_END, LOAD_VALE_SALIDA } from 'src/app/store/actions/vales/vale.actions';


export interface ValeState {
    vale: ValeSalida;
    loaded: boolean;
    loading: boolean;
    error: any;
    mensaje: any;
}

const estadoInicial: ValeState = {
    vale: null,
    loaded: false,
    loading: false,
    error: null,
    mensaje: null
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
                    numeroRequisicion: action.payload.numeroRequisicion
                }
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
        case fromVale.LOAD_VALE_SALIDA:
            return {
                ...state,
                loading: true
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
                loaded: true,
                vale: null,
                error: action.payLoad
            };
        break;
        default:
            return state;
        break;
    }
}
