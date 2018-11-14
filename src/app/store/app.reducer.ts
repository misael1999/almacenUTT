import * as reducers from './reducers';
import { ActionReducerMap } from '@ngrx/store';

export interface AppState {
    auth: reducers.AuthState;
    proveedor: reducers.ProveedorState;
    proveedores: reducers.ProveedoresState;
    productos: reducers.ProductosState;
    factura: reducers.FacturaState;
}

export const appReducers: ActionReducerMap<AppState> = {
    auth: reducers.authReducer,
    proveedor: reducers.proveedorReducer,
    proveedores: reducers.proveedoresReducer,
    productos: reducers.productosReducer,
    factura: reducers.facturaReducer
};


