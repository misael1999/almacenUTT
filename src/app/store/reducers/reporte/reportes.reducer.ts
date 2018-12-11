import { Producto } from '../../../models/Producto';
import * as fromReportes from '../../actions';

export interface ReportesState {
    productos: Producto[];
    loaded: boolean;
    loading: boolean;
    error: any;
    pageable: any;
  }

  const estadoInicial: ReportesState = {
    productos: [],
    loaded: false,
    loading: false,
    error: null,
    pageable: null
  };

  export function reportesReducer(state = estadoInicial, action: fromReportes.reportesAcciones): ReportesState {

    switch (action.type) {
        case fromReportes.LOAD_REPORTE_PRODUCTOS:
            return {
                ...state,
                loading: true
            };
        case fromReportes.LOAD_REPORTE_PRODUCTOS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
                productos: [...action.productos],
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
        case fromReportes.LOAD_REPORTE_PRODUCTOS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload,
                productos: []
            };
            break;
        default:
            return state;
        break;
    }
  }
