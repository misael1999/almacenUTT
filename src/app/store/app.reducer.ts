import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    auth: reducers.AuthState;
    proveedor: reducers.ProveedorState;
    proveedores: reducers.ProveedoresState;
    productos: reducers.ProductosState;
    producto: reducers.ProductoState;
    factura: reducers.FacturaState;
    facturas: reducers.FacturasState;
    usuario: reducers.UsuarioState;
    usuarios: reducers.UsuariosState;
    areas: reducers.AreasState;
    area: reducers.AreaState;
    ui: reducers.UiState;
    vale: reducers.ValeState;
    vales: reducers.ValesState;
    estadisticas: reducers.EstadisticaState;
    reportes: reducers.ReportesState;
    privilegios: reducers.PrivilegiosState;
    dashboard: reducers.DashboardState;
}

export const appReducers: ActionReducerMap<AppState> = {
    auth: reducers.authReducer,
    productos: reducers.productosReducer,
    producto: reducers.productoReducer,
    proveedor: reducers.proveedorReducer,
    proveedores: reducers.proveedoresReducer,
    factura: reducers.facturaReducer,
    facturas: reducers.facturasReducer,
    usuario: reducers.usuarioReducer,
    usuarios: reducers.usuariosReducer,
    areas: reducers.areasReducer,
    area: reducers.areaReducer,
    ui: reducers.uiReducer,
    vale: reducers.valeReducer,
    vales: reducers.valesReducer,
    estadisticas: reducers.estadisticaReducer,
    reportes: reducers.reportesReducer,
    privilegios: reducers.privilegiosReducer,
    dashboard: reducers.dashboardReducer
};


