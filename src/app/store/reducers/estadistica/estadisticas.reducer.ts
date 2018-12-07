import * as fromEstadisticas from '../../actions';

export interface EstadisticaState {
  estadisticasVale: any;
  loaded: boolean;
  loading: boolean;
  error: any;
}

const estadoInicial: EstadisticaState = {
  estadisticasVale: null,
  loaded: false,
  loading: false,
  error: null,
};


export function estadisticaReducer(state = estadoInicial, action: fromEstadisticas.estadisticasAcciones): EstadisticaState {


    switch (action.type) {
        case fromEstadisticas.LOAD_ESTADISTICAS_VALES:
            return {
                ...state,
                loading: true,
                loaded: false
            };
            break;
        case fromEstadisticas.LOAD_ESTADISTICAS_VALES_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                estadisticasVale: {
                    fecha1: action.estadisticas.fecha1,
                    fecha2: action.estadisticas.fecha3,
                    fecha3: action.estadisticas.fecha2
                }
            };
            break;
        case fromEstadisticas.LOAD_ESTADISTICAS_VALES_FAIL:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: action.payload,
                estadisticasVale: null
            };
            break;
        default:
            return state;
            break;
    }

}
