import * as fromVales from 'src/app/store/actions';
import { ValeSalida } from 'src/app/models/ValeSalida';
import { LOAD_VALES_SALIDA_ENTREGADOS } from 'src/app/store/actions/vales/vales.actions';


export interface ValesState {
    vales: ValeSalida[];
    loaded: boolean;
    loading: boolean;
    error: any;
}

const estadoInicial: ValesState = {
    vales: [],
    loaded: false,
    loading: false,
    error: null
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
                loading: true,
                loaded: true,
                vales: action.vales,
                error: null
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
