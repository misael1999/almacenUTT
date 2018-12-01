import * as fromAreas from '../../actions';
import { Area } from '../../../models/Area';

export interface AreaState {
    area: Area;
    loaded: boolean;
    loading: boolean;
    error: any;
    mensaje: any;
  }

  const estadoInicial: AreaState = {
    area: null,
    loaded: false,
    loading: false,
    error: null,
    mensaje: null
  };

  export function areaReducer(state = estadoInicial, action: fromAreas.AreaAcciones): AreaState {

    switch (action.type) {

        // ----  CREAR AREA   ---- //
        case fromAreas.CREATE_AREA:
            return {
                ...state,
                loading: true,
                area: action.area
            };
        case fromAreas.CREATE_AREA_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                mensaje: {
                    titulo: action.payload.titulo,
                    mensaje: action.payload.mensaje
                }
            };
            case fromAreas.CREATE_AREA_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload,
                mensaje: null
            };
            break;
        case fromAreas.CREATE_AREA_END:
            return {
                ...state,
                mensaje: null,
                error: null
            };
            break;
            // ----  ACTUALIZAR AREAS   ---- //
        case fromAreas.UPDATE_AREA:
            return {
                ...state,
                loading: true,
            };
            break;
        case fromAreas.SELECT_AREA:
            return {
                ...state,
                area: action.area
            };
            break;
        case fromAreas.UPDATE_AREA_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                mensaje: {
                    titulo: action.payload.titulo,
                    mensaje: action.payload.mensaje
                }
            };
            break;
        case fromAreas.UPDATE_AREA_FAIL:
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

