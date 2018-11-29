import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    auth: reducers.AuthState;
    proveedor: reducers.ProveedorState;
    proveedores: reducers.ProveedoresState;
    productos: reducers.ProductosState;
    factura: reducers.FacturaState;
    facturas: reducers.FacturasState;
    usuario: reducers.UsuarioState;
    areas: reducers.AreasState;
    vale: reducers.ValeState;
    vales: reducers.ValesState;
}

export const appReducers: ActionReducerMap<AppState> = {
    auth: reducers.authReducer,
    productos: reducers.productosReducer,
    proveedor: reducers.proveedorReducer,
    proveedores: reducers.proveedoresReducer,
    factura: reducers.facturaReducer,
    facturas: reducers.facturasReducer,
    usuario: reducers.usuarioReducer,
    areas: reducers.areasReducer,
    vale: reducers.valeReducer,
    vales: reducers.valesReducer
};


