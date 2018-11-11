import { AuthEffects } from './auth.effects';
import { ProveedorEffects } from './proveedor/proveedor.effects';
import { ProveedoresEffects } from './proveedor/proveedores.effects';
import { ProductosEffects } from './producto/productos.effects';

export const effectArreglo: any[] = [
    AuthEffects,
    ProveedorEffects,
    ProveedoresEffects,
    ProductosEffects

];

export * from './auth.effects';
export * from './proveedor/proveedor.effects';
export * from './proveedor/proveedores.effects';
export * from './producto/productos.effects';

