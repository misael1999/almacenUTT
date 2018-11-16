import { AuthEffects } from './auth.effects';
import { ProveedorEffects } from './proveedor/proveedor.effects';
import { ProveedoresEffects } from './proveedor/proveedores.effects';
import { ProductosEffects } from './producto/productos.effects';
import { FacturaEffects } from './factura/factura.effects';
import { UsuarioEffects } from './usuario/usuario.effects';

export const effectArreglo: any[] = [
    AuthEffects,
    ProveedorEffects,
    ProveedoresEffects,
    ProductosEffects,
    FacturaEffects,
    UsuarioEffects
];

export * from './auth.effects';
export * from './proveedor/proveedor.effects';
export * from './proveedor/proveedores.effects';
export * from './producto/productos.effects';
export * from './factura/factura.effects';
export * from './usuario/usuario.effects';

