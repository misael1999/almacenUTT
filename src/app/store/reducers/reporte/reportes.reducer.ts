import { Producto } from '../../../models/Producto';
import * as fromReportes from '../../actions';

export interface ReportesState {
    loaded: boolean;
    loading: boolean;
    error: any;
  }

  const estadoInicial: ReportesState = {
    loaded: false,
    loading: false,
    error: null,
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
            };
            break;
        case fromReportes.LOAD_REPORTE_PRODUCTOS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            };
            break;
    // ----  REPORTES POR AREA   ---- //
        case fromReportes.LOAD_REPORTE_AREAS:
            return {
                ...state,
                loading: true
            };
        case fromReportes.LOAD_REPORTE_AREAS_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
            };
            break;
        case fromReportes.LOAD_REPORTE_AREAS_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            };
            break;
            // ----  REPORTES DE PRODUCTOS POR PROVEEDOR   ---- //
        case fromReportes.LOAD_REPORTE_PRODUCTOS_PROVEEDORES:
            return {
                ...state,
                loading: true
            };
        case fromReportes.LOAD_REPORTE_PRODUCTOS_PROVEEDORES_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
            };
            break;
        case fromReportes.LOAD_REPORTE_PRODUCTOS_PROVEEDORES_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            };
            break;
        case fromReportes.LOAD_REPORTES_END:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: null
            };
            break;
        // ----  REPORTES DE GASTOS DE AREAS   ---- //
        case fromReportes.LOAD_REPORTE_GASTOS_AREA:
            return {
                ...state,
                loading: true
            };
        case fromReportes.LOAD_REPORTE_GASTOS_AREA_SUCCESS:
            return {
                ...state,
                loading: false,
                loaded: true,
            };
            break;
        case fromReportes.LOAD_REPORTE_GASTOS_AREA_FAIL:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: action.payload
            };
            break;
        case fromReportes.LOAD_REPORTES_END:
            return {
                ...state,
                loading: false,
                loaded: false,
                error: null
            };
            break;
        default:
            return state;
        break;
    }
  }
