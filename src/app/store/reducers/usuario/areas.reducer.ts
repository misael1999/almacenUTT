import * as fromAreas from '../../actions';
import { Area } from '../../../models/area';

export interface AreasState {
    areas: Area[];
    loaded: boolean;
    loading: boolean;
    error: any;
  }

  const estadoInicial: AreasState = {
    areas: [],
    loaded: false,
    loading: false,
    error: null,
  };

  export function areasReducer(state = estadoInicial, action: fromAreas.areassAcciones): AreasState {

    switch (action.type) {
        case fromAreas.LOAD_AREAS:
            return {
                ...state,
                loading: true
            };
            break;
        case fromAreas.LOAD_AREAS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                error: null,
                areas: [...action.areas]
            };
            break;
        case fromAreas.LOAD_AREAS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload,
            };
            break;
        default:
        return state;
            break;
    }
}
